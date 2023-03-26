import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, tap, retry, debounceTime, switchMap, catchError,  } from 'rxjs/operators';
import { CHANGE_SEARCH, SEARCH_SETING_REQUEST } from './actionTypes';
import { searchSetingRequest, searchSetingSuccess, searchSetingFailure, resetSearch } from './actions';
import { of } from 'rxjs';

export const changeSetingEpic = action$ => action$.pipe(
    ofType(CHANGE_SEARCH),
    map(o => o.payload.search.trim()),
    debounceTime(100),
    mergeMap(o => {
        if (o === '') {
            return of(resetSearch());
        } else {
            return of(searchSetingRequest(o));
        }
    })
)

export const searchSetingEpic = action$ => action$.pipe(
    ofType(SEARCH_SETING_REQUEST),
    map(o => o.payload.search),
    map(o => new URLSearchParams({ q: o })),
    tap(o => console.log(o)),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}?${o}`).pipe(
        retry(3),
        map(o => searchSetingSuccess(o)),
        catchError(e => of(searchSetingFailure(e))),
    )),
);