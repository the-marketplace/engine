import * as GraphHTTP from 'express-graphql';
// import Schema from "../schema/schema"; import { db, sql } from "./postgres";

export const initGraphQL = () => GraphHTTP(loadParams as any);

const loadParams = async () =>
	// req: { 	user: any; }
	{};
