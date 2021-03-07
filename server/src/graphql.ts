
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class IUser {
    id: string;
    name: string;
}

export abstract class IQuery {
    abstract users(): IUser[] | Promise<IUser[]>;
}
