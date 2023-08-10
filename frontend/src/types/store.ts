import { Action } from 'redux';
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store/rootReducer";
import { AnyAction } from 'redux';
export interface PayloadAction<T> extends Action {
    payload: T;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FunctionType = (...args: any[]) => any;

type ActionCreatorsMapObject = { [actionCreator: string]: FunctionType };

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;

export type ActionsReturnTypes<A extends ActionCreatorsMapObject> = {
    [K in keyof A]: ReturnType<A[K]>;
};

export interface ActionWithPayloadHelper<T extends string, P> extends ActionHelper<T> {
    payload: P;
}
export interface ActionHelper<T extends string> {
    type: T;
}
export type ActionPayload<P> = ActionWithPayloadHelper<string, P>;

// eslint-disable-next-line import/export
export function createAction<T extends string>(type: T): ActionHelper<T>;

// eslint-disable-next-line import/export
export function createAction<T extends string, P>(
    type: T,
    payload: P,
): ActionWithPayloadHelper<T, P>;
// eslint-disable-next-line import/export, @typescript-eslint/explicit-module-boundary-types
export function createAction<T extends string, P>(type: T, payload?: P) {
    return payload === undefined ? { type } : { type, payload };
}

export const simpleActionCreator =
    <T extends string>(actionType: T) =>
        // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
        () =>
            createAction(actionType);

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;