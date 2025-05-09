
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Survey
 * 
 */
export type Survey = $Result.DefaultSelection<Prisma.$SurveyPayload>
/**
 * Model Mission
 * 
 */
export type Mission = $Result.DefaultSelection<Prisma.$MissionPayload>
/**
 * Model MissionCompletion
 * 
 */
export type MissionCompletion = $Result.DefaultSelection<Prisma.$MissionCompletionPayload>
/**
 * Model MissionVerification
 * 
 */
export type MissionVerification = $Result.DefaultSelection<Prisma.$MissionVerificationPayload>
/**
 * Model Badge
 * 
 */
export type Badge = $Result.DefaultSelection<Prisma.$BadgePayload>
/**
 * Model Friend
 * 
 */
export type Friend = $Result.DefaultSelection<Prisma.$FriendPayload>
/**
 * Model DailyWeeklyProgress
 * 
 */
export type DailyWeeklyProgress = $Result.DefaultSelection<Prisma.$DailyWeeklyProgressPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MissionType: {
  RECEIPT: 'RECEIPT',
  GPS: 'GPS',
  VOICE: 'VOICE',
  BUTTON: 'BUTTON',
  DIARY: 'DIARY'
};

export type MissionType = (typeof MissionType)[keyof typeof MissionType]


export const MissionStatus: {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED'
};

export type MissionStatus = (typeof MissionStatus)[keyof typeof MissionStatus]

}

export type MissionType = $Enums.MissionType

export const MissionType: typeof $Enums.MissionType

export type MissionStatus = $Enums.MissionStatus

export const MissionStatus: typeof $Enums.MissionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.survey`: Exposes CRUD operations for the **Survey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Surveys
    * const surveys = await prisma.survey.findMany()
    * ```
    */
  get survey(): Prisma.SurveyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mission`: Exposes CRUD operations for the **Mission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Missions
    * const missions = await prisma.mission.findMany()
    * ```
    */
  get mission(): Prisma.MissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.missionCompletion`: Exposes CRUD operations for the **MissionCompletion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MissionCompletions
    * const missionCompletions = await prisma.missionCompletion.findMany()
    * ```
    */
  get missionCompletion(): Prisma.MissionCompletionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.missionVerification`: Exposes CRUD operations for the **MissionVerification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MissionVerifications
    * const missionVerifications = await prisma.missionVerification.findMany()
    * ```
    */
  get missionVerification(): Prisma.MissionVerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.badge`: Exposes CRUD operations for the **Badge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Badges
    * const badges = await prisma.badge.findMany()
    * ```
    */
  get badge(): Prisma.BadgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friend`: Exposes CRUD operations for the **Friend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friends
    * const friends = await prisma.friend.findMany()
    * ```
    */
  get friend(): Prisma.FriendDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyWeeklyProgress`: Exposes CRUD operations for the **DailyWeeklyProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyWeeklyProgresses
    * const dailyWeeklyProgresses = await prisma.dailyWeeklyProgress.findMany()
    * ```
    */
  get dailyWeeklyProgress(): Prisma.DailyWeeklyProgressDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Survey: 'Survey',
    Mission: 'Mission',
    MissionCompletion: 'MissionCompletion',
    MissionVerification: 'MissionVerification',
    Badge: 'Badge',
    Friend: 'Friend',
    DailyWeeklyProgress: 'DailyWeeklyProgress'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "survey" | "mission" | "missionCompletion" | "missionVerification" | "badge" | "friend" | "dailyWeeklyProgress"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Survey: {
        payload: Prisma.$SurveyPayload<ExtArgs>
        fields: Prisma.SurveyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SurveyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SurveyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          findFirst: {
            args: Prisma.SurveyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SurveyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          findMany: {
            args: Prisma.SurveyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>[]
          }
          create: {
            args: Prisma.SurveyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          createMany: {
            args: Prisma.SurveyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SurveyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          update: {
            args: Prisma.SurveyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          deleteMany: {
            args: Prisma.SurveyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SurveyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SurveyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          aggregate: {
            args: Prisma.SurveyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurvey>
          }
          groupBy: {
            args: Prisma.SurveyGroupByArgs<ExtArgs>
            result: $Utils.Optional<SurveyGroupByOutputType>[]
          }
          count: {
            args: Prisma.SurveyCountArgs<ExtArgs>
            result: $Utils.Optional<SurveyCountAggregateOutputType> | number
          }
        }
      }
      Mission: {
        payload: Prisma.$MissionPayload<ExtArgs>
        fields: Prisma.MissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findFirst: {
            args: Prisma.MissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findMany: {
            args: Prisma.MissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          create: {
            args: Prisma.MissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          createMany: {
            args: Prisma.MissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          update: {
            args: Prisma.MissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          deleteMany: {
            args: Prisma.MissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          aggregate: {
            args: Prisma.MissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMission>
          }
          groupBy: {
            args: Prisma.MissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionCountArgs<ExtArgs>
            result: $Utils.Optional<MissionCountAggregateOutputType> | number
          }
        }
      }
      MissionCompletion: {
        payload: Prisma.$MissionCompletionPayload<ExtArgs>
        fields: Prisma.MissionCompletionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionCompletionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionCompletionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionCompletionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionCompletionPayload>
          }
          findFirst: {
            args: Prisma.MissionCompletionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionCompletionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionCompletionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionCompletionPayload>
          }
          findMany: {
            args: Prisma.MissionCompletionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionCompletionPayload>[]
          }
          create: {
            args: Prisma.MissionCompletionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionCompletionPayload>
          }
          createMany: {
            args: Prisma.MissionCompletionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MissionCompletionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionCompletionPayload>
          }
          update: {
            args: Prisma.MissionCompletionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionCompletionPayload>
          }
          deleteMany: {
            args: Prisma.MissionCompletionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionCompletionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MissionCompletionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionCompletionPayload>
          }
          aggregate: {
            args: Prisma.MissionCompletionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMissionCompletion>
          }
          groupBy: {
            args: Prisma.MissionCompletionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionCompletionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionCompletionCountArgs<ExtArgs>
            result: $Utils.Optional<MissionCompletionCountAggregateOutputType> | number
          }
        }
      }
      MissionVerification: {
        payload: Prisma.$MissionVerificationPayload<ExtArgs>
        fields: Prisma.MissionVerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionVerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionVerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionVerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionVerificationPayload>
          }
          findFirst: {
            args: Prisma.MissionVerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionVerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionVerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionVerificationPayload>
          }
          findMany: {
            args: Prisma.MissionVerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionVerificationPayload>[]
          }
          create: {
            args: Prisma.MissionVerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionVerificationPayload>
          }
          createMany: {
            args: Prisma.MissionVerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MissionVerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionVerificationPayload>
          }
          update: {
            args: Prisma.MissionVerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionVerificationPayload>
          }
          deleteMany: {
            args: Prisma.MissionVerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionVerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MissionVerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionVerificationPayload>
          }
          aggregate: {
            args: Prisma.MissionVerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMissionVerification>
          }
          groupBy: {
            args: Prisma.MissionVerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionVerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionVerificationCountArgs<ExtArgs>
            result: $Utils.Optional<MissionVerificationCountAggregateOutputType> | number
          }
        }
      }
      Badge: {
        payload: Prisma.$BadgePayload<ExtArgs>
        fields: Prisma.BadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findFirst: {
            args: Prisma.BadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findMany: {
            args: Prisma.BadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          create: {
            args: Prisma.BadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          createMany: {
            args: Prisma.BadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          update: {
            args: Prisma.BadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          deleteMany: {
            args: Prisma.BadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          aggregate: {
            args: Prisma.BadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBadge>
          }
          groupBy: {
            args: Prisma.BadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BadgeCountArgs<ExtArgs>
            result: $Utils.Optional<BadgeCountAggregateOutputType> | number
          }
        }
      }
      Friend: {
        payload: Prisma.$FriendPayload<ExtArgs>
        fields: Prisma.FriendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          findFirst: {
            args: Prisma.FriendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          findMany: {
            args: Prisma.FriendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>[]
          }
          create: {
            args: Prisma.FriendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          createMany: {
            args: Prisma.FriendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FriendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          update: {
            args: Prisma.FriendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          deleteMany: {
            args: Prisma.FriendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FriendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          aggregate: {
            args: Prisma.FriendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriend>
          }
          groupBy: {
            args: Prisma.FriendGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendCountArgs<ExtArgs>
            result: $Utils.Optional<FriendCountAggregateOutputType> | number
          }
        }
      }
      DailyWeeklyProgress: {
        payload: Prisma.$DailyWeeklyProgressPayload<ExtArgs>
        fields: Prisma.DailyWeeklyProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyWeeklyProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyWeeklyProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyWeeklyProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyWeeklyProgressPayload>
          }
          findFirst: {
            args: Prisma.DailyWeeklyProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyWeeklyProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyWeeklyProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyWeeklyProgressPayload>
          }
          findMany: {
            args: Prisma.DailyWeeklyProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyWeeklyProgressPayload>[]
          }
          create: {
            args: Prisma.DailyWeeklyProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyWeeklyProgressPayload>
          }
          createMany: {
            args: Prisma.DailyWeeklyProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DailyWeeklyProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyWeeklyProgressPayload>
          }
          update: {
            args: Prisma.DailyWeeklyProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyWeeklyProgressPayload>
          }
          deleteMany: {
            args: Prisma.DailyWeeklyProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyWeeklyProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailyWeeklyProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyWeeklyProgressPayload>
          }
          aggregate: {
            args: Prisma.DailyWeeklyProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyWeeklyProgress>
          }
          groupBy: {
            args: Prisma.DailyWeeklyProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyWeeklyProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyWeeklyProgressCountArgs<ExtArgs>
            result: $Utils.Optional<DailyWeeklyProgressCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    survey?: SurveyOmit
    mission?: MissionOmit
    missionCompletion?: MissionCompletionOmit
    missionVerification?: MissionVerificationOmit
    badge?: BadgeOmit
    friend?: FriendOmit
    dailyWeeklyProgress?: DailyWeeklyProgressOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    badges: number
    dailyProgress: number
    friendOf: number
    friends: number
    missions: number
    surveys: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badges?: boolean | UserCountOutputTypeCountBadgesArgs
    dailyProgress?: boolean | UserCountOutputTypeCountDailyProgressArgs
    friendOf?: boolean | UserCountOutputTypeCountFriendOfArgs
    friends?: boolean | UserCountOutputTypeCountFriendsArgs
    missions?: boolean | UserCountOutputTypeCountMissionsArgs
    surveys?: boolean | UserCountOutputTypeCountSurveysArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyWeeklyProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionCompletionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSurveysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurveyWhereInput
  }


  /**
   * Count Type MissionCountOutputType
   */

  export type MissionCountOutputType = {
    completions: number
  }

  export type MissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completions?: boolean | MissionCountOutputTypeCountCompletionsArgs
  }

  // Custom InputTypes
  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionCountOutputType
     */
    select?: MissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeCountCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionCompletionWhereInput
  }


  /**
   * Count Type MissionCompletionCountOutputType
   */

  export type MissionCompletionCountOutputType = {
    verifications: number
  }

  export type MissionCompletionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verifications?: boolean | MissionCompletionCountOutputTypeCountVerificationsArgs
  }

  // Custom InputTypes
  /**
   * MissionCompletionCountOutputType without action
   */
  export type MissionCompletionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionCompletionCountOutputType
     */
    select?: MissionCompletionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MissionCompletionCountOutputType without action
   */
  export type MissionCompletionCountOutputTypeCountVerificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionVerificationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    nickname: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    nickname: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    nickname: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nickname?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nickname?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nickname?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    nickname: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nickname?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    badges?: boolean | User$badgesArgs<ExtArgs>
    dailyProgress?: boolean | User$dailyProgressArgs<ExtArgs>
    friendOf?: boolean | User$friendOfArgs<ExtArgs>
    friends?: boolean | User$friendsArgs<ExtArgs>
    missions?: boolean | User$missionsArgs<ExtArgs>
    surveys?: boolean | User$surveysArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    nickname?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "nickname" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badges?: boolean | User$badgesArgs<ExtArgs>
    dailyProgress?: boolean | User$dailyProgressArgs<ExtArgs>
    friendOf?: boolean | User$friendOfArgs<ExtArgs>
    friends?: boolean | User$friendsArgs<ExtArgs>
    missions?: boolean | User$missionsArgs<ExtArgs>
    surveys?: boolean | User$surveysArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      badges: Prisma.$BadgePayload<ExtArgs>[]
      dailyProgress: Prisma.$DailyWeeklyProgressPayload<ExtArgs>[]
      friendOf: Prisma.$FriendPayload<ExtArgs>[]
      friends: Prisma.$FriendPayload<ExtArgs>[]
      missions: Prisma.$MissionCompletionPayload<ExtArgs>[]
      surveys: Prisma.$SurveyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      nickname: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    badges<T extends User$badgesArgs<ExtArgs> = {}>(args?: Subset<T, User$badgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyProgress<T extends User$dailyProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyWeeklyProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friendOf<T extends User$friendOfArgs<ExtArgs> = {}>(args?: Subset<T, User$friendOfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friends<T extends User$friendsArgs<ExtArgs> = {}>(args?: Subset<T, User$friendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    missions<T extends User$missionsArgs<ExtArgs> = {}>(args?: Subset<T, User$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    surveys<T extends User$surveysArgs<ExtArgs> = {}>(args?: Subset<T, User$surveysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.badges
   */
  export type User$badgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    where?: BadgeWhereInput
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    cursor?: BadgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * User.dailyProgress
   */
  export type User$dailyProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyWeeklyProgress
     */
    select?: DailyWeeklyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyWeeklyProgress
     */
    omit?: DailyWeeklyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyWeeklyProgressInclude<ExtArgs> | null
    where?: DailyWeeklyProgressWhereInput
    orderBy?: DailyWeeklyProgressOrderByWithRelationInput | DailyWeeklyProgressOrderByWithRelationInput[]
    cursor?: DailyWeeklyProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyWeeklyProgressScalarFieldEnum | DailyWeeklyProgressScalarFieldEnum[]
  }

  /**
   * User.friendOf
   */
  export type User$friendOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    cursor?: FriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * User.friends
   */
  export type User$friendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    cursor?: FriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * User.missions
   */
  export type User$missionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionCompletion
     */
    select?: MissionCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionCompletion
     */
    omit?: MissionCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionCompletionInclude<ExtArgs> | null
    where?: MissionCompletionWhereInput
    orderBy?: MissionCompletionOrderByWithRelationInput | MissionCompletionOrderByWithRelationInput[]
    cursor?: MissionCompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionCompletionScalarFieldEnum | MissionCompletionScalarFieldEnum[]
  }

  /**
   * User.surveys
   */
  export type User$surveysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey
     */
    omit?: SurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    where?: SurveyWhereInput
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    cursor?: SurveyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Survey
   */

  export type AggregateSurvey = {
    _count: SurveyCountAggregateOutputType | null
    _avg: SurveyAvgAggregateOutputType | null
    _sum: SurveySumAggregateOutputType | null
    _min: SurveyMinAggregateOutputType | null
    _max: SurveyMaxAggregateOutputType | null
  }

  export type SurveyAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    age: number | null
  }

  export type SurveySumAggregateOutputType = {
    id: number | null
    userId: number | null
    age: number | null
  }

  export type SurveyMinAggregateOutputType = {
    id: number | null
    userId: number | null
    age: number | null
    gender: string | null
    createdAt: Date | null
  }

  export type SurveyMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    age: number | null
    gender: string | null
    createdAt: Date | null
  }

  export type SurveyCountAggregateOutputType = {
    id: number
    userId: number
    age: number
    gender: number
    answers: number
    createdAt: number
    _all: number
  }


  export type SurveyAvgAggregateInputType = {
    id?: true
    userId?: true
    age?: true
  }

  export type SurveySumAggregateInputType = {
    id?: true
    userId?: true
    age?: true
  }

  export type SurveyMinAggregateInputType = {
    id?: true
    userId?: true
    age?: true
    gender?: true
    createdAt?: true
  }

  export type SurveyMaxAggregateInputType = {
    id?: true
    userId?: true
    age?: true
    gender?: true
    createdAt?: true
  }

  export type SurveyCountAggregateInputType = {
    id?: true
    userId?: true
    age?: true
    gender?: true
    answers?: true
    createdAt?: true
    _all?: true
  }

  export type SurveyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Survey to aggregate.
     */
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     */
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Surveys
    **/
    _count?: true | SurveyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SurveyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SurveySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurveyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurveyMaxAggregateInputType
  }

  export type GetSurveyAggregateType<T extends SurveyAggregateArgs> = {
        [P in keyof T & keyof AggregateSurvey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurvey[P]>
      : GetScalarType<T[P], AggregateSurvey[P]>
  }




  export type SurveyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurveyWhereInput
    orderBy?: SurveyOrderByWithAggregationInput | SurveyOrderByWithAggregationInput[]
    by: SurveyScalarFieldEnum[] | SurveyScalarFieldEnum
    having?: SurveyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurveyCountAggregateInputType | true
    _avg?: SurveyAvgAggregateInputType
    _sum?: SurveySumAggregateInputType
    _min?: SurveyMinAggregateInputType
    _max?: SurveyMaxAggregateInputType
  }

  export type SurveyGroupByOutputType = {
    id: number
    userId: number
    age: number
    gender: string
    answers: JsonValue
    createdAt: Date
    _count: SurveyCountAggregateOutputType | null
    _avg: SurveyAvgAggregateOutputType | null
    _sum: SurveySumAggregateOutputType | null
    _min: SurveyMinAggregateOutputType | null
    _max: SurveyMaxAggregateOutputType | null
  }

  type GetSurveyGroupByPayload<T extends SurveyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SurveyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurveyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurveyGroupByOutputType[P]>
            : GetScalarType<T[P], SurveyGroupByOutputType[P]>
        }
      >
    >


  export type SurveySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    age?: boolean
    gender?: boolean
    answers?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["survey"]>



  export type SurveySelectScalar = {
    id?: boolean
    userId?: boolean
    age?: boolean
    gender?: boolean
    answers?: boolean
    createdAt?: boolean
  }

  export type SurveyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "age" | "gender" | "answers" | "createdAt", ExtArgs["result"]["survey"]>
  export type SurveyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SurveyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Survey"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      age: number
      gender: string
      answers: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["survey"]>
    composites: {}
  }

  type SurveyGetPayload<S extends boolean | null | undefined | SurveyDefaultArgs> = $Result.GetResult<Prisma.$SurveyPayload, S>

  type SurveyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SurveyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SurveyCountAggregateInputType | true
    }

  export interface SurveyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Survey'], meta: { name: 'Survey' } }
    /**
     * Find zero or one Survey that matches the filter.
     * @param {SurveyFindUniqueArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SurveyFindUniqueArgs>(args: SelectSubset<T, SurveyFindUniqueArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Survey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SurveyFindUniqueOrThrowArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SurveyFindUniqueOrThrowArgs>(args: SelectSubset<T, SurveyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Survey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyFindFirstArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SurveyFindFirstArgs>(args?: SelectSubset<T, SurveyFindFirstArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Survey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyFindFirstOrThrowArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SurveyFindFirstOrThrowArgs>(args?: SelectSubset<T, SurveyFindFirstOrThrowArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Surveys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Surveys
     * const surveys = await prisma.survey.findMany()
     * 
     * // Get first 10 Surveys
     * const surveys = await prisma.survey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surveyWithIdOnly = await prisma.survey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SurveyFindManyArgs>(args?: SelectSubset<T, SurveyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Survey.
     * @param {SurveyCreateArgs} args - Arguments to create a Survey.
     * @example
     * // Create one Survey
     * const Survey = await prisma.survey.create({
     *   data: {
     *     // ... data to create a Survey
     *   }
     * })
     * 
     */
    create<T extends SurveyCreateArgs>(args: SelectSubset<T, SurveyCreateArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Surveys.
     * @param {SurveyCreateManyArgs} args - Arguments to create many Surveys.
     * @example
     * // Create many Surveys
     * const survey = await prisma.survey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SurveyCreateManyArgs>(args?: SelectSubset<T, SurveyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Survey.
     * @param {SurveyDeleteArgs} args - Arguments to delete one Survey.
     * @example
     * // Delete one Survey
     * const Survey = await prisma.survey.delete({
     *   where: {
     *     // ... filter to delete one Survey
     *   }
     * })
     * 
     */
    delete<T extends SurveyDeleteArgs>(args: SelectSubset<T, SurveyDeleteArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Survey.
     * @param {SurveyUpdateArgs} args - Arguments to update one Survey.
     * @example
     * // Update one Survey
     * const survey = await prisma.survey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SurveyUpdateArgs>(args: SelectSubset<T, SurveyUpdateArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Surveys.
     * @param {SurveyDeleteManyArgs} args - Arguments to filter Surveys to delete.
     * @example
     * // Delete a few Surveys
     * const { count } = await prisma.survey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SurveyDeleteManyArgs>(args?: SelectSubset<T, SurveyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Surveys
     * const survey = await prisma.survey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SurveyUpdateManyArgs>(args: SelectSubset<T, SurveyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Survey.
     * @param {SurveyUpsertArgs} args - Arguments to update or create a Survey.
     * @example
     * // Update or create a Survey
     * const survey = await prisma.survey.upsert({
     *   create: {
     *     // ... data to create a Survey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Survey we want to update
     *   }
     * })
     */
    upsert<T extends SurveyUpsertArgs>(args: SelectSubset<T, SurveyUpsertArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Surveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyCountArgs} args - Arguments to filter Surveys to count.
     * @example
     * // Count the number of Surveys
     * const count = await prisma.survey.count({
     *   where: {
     *     // ... the filter for the Surveys we want to count
     *   }
     * })
    **/
    count<T extends SurveyCountArgs>(
      args?: Subset<T, SurveyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurveyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Survey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SurveyAggregateArgs>(args: Subset<T, SurveyAggregateArgs>): Prisma.PrismaPromise<GetSurveyAggregateType<T>>

    /**
     * Group by Survey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SurveyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurveyGroupByArgs['orderBy'] }
        : { orderBy?: SurveyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SurveyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurveyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Survey model
   */
  readonly fields: SurveyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Survey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SurveyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Survey model
   */
  interface SurveyFieldRefs {
    readonly id: FieldRef<"Survey", 'Int'>
    readonly userId: FieldRef<"Survey", 'Int'>
    readonly age: FieldRef<"Survey", 'Int'>
    readonly gender: FieldRef<"Survey", 'String'>
    readonly answers: FieldRef<"Survey", 'Json'>
    readonly createdAt: FieldRef<"Survey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Survey findUnique
   */
  export type SurveyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey
     */
    omit?: SurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Survey to fetch.
     */
    where: SurveyWhereUniqueInput
  }

  /**
   * Survey findUniqueOrThrow
   */
  export type SurveyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey
     */
    omit?: SurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Survey to fetch.
     */
    where: SurveyWhereUniqueInput
  }

  /**
   * Survey findFirst
   */
  export type SurveyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey
     */
    omit?: SurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Survey to fetch.
     */
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     */
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surveys.
     */
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surveys.
     */
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }

  /**
   * Survey findFirstOrThrow
   */
  export type SurveyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey
     */
    omit?: SurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Survey to fetch.
     */
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     */
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surveys.
     */
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surveys.
     */
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }

  /**
   * Survey findMany
   */
  export type SurveyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey
     */
    omit?: SurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Surveys to fetch.
     */
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     */
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Surveys.
     */
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     */
    skip?: number
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }

  /**
   * Survey create
   */
  export type SurveyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey
     */
    omit?: SurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * The data needed to create a Survey.
     */
    data: XOR<SurveyCreateInput, SurveyUncheckedCreateInput>
  }

  /**
   * Survey createMany
   */
  export type SurveyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Surveys.
     */
    data: SurveyCreateManyInput | SurveyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Survey update
   */
  export type SurveyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey
     */
    omit?: SurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * The data needed to update a Survey.
     */
    data: XOR<SurveyUpdateInput, SurveyUncheckedUpdateInput>
    /**
     * Choose, which Survey to update.
     */
    where: SurveyWhereUniqueInput
  }

  /**
   * Survey updateMany
   */
  export type SurveyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Surveys.
     */
    data: XOR<SurveyUpdateManyMutationInput, SurveyUncheckedUpdateManyInput>
    /**
     * Filter which Surveys to update
     */
    where?: SurveyWhereInput
    /**
     * Limit how many Surveys to update.
     */
    limit?: number
  }

  /**
   * Survey upsert
   */
  export type SurveyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey
     */
    omit?: SurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * The filter to search for the Survey to update in case it exists.
     */
    where: SurveyWhereUniqueInput
    /**
     * In case the Survey found by the `where` argument doesn't exist, create a new Survey with this data.
     */
    create: XOR<SurveyCreateInput, SurveyUncheckedCreateInput>
    /**
     * In case the Survey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SurveyUpdateInput, SurveyUncheckedUpdateInput>
  }

  /**
   * Survey delete
   */
  export type SurveyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey
     */
    omit?: SurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter which Survey to delete.
     */
    where: SurveyWhereUniqueInput
  }

  /**
   * Survey deleteMany
   */
  export type SurveyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Surveys to delete
     */
    where?: SurveyWhereInput
    /**
     * Limit how many Surveys to delete.
     */
    limit?: number
  }

  /**
   * Survey without action
   */
  export type SurveyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey
     */
    omit?: SurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
  }


  /**
   * Model Mission
   */

  export type AggregateMission = {
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  export type MissionAvgAggregateOutputType = {
    id: number | null
  }

  export type MissionSumAggregateOutputType = {
    id: number | null
  }

  export type MissionMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    type: $Enums.MissionType | null
    verificationType: string | null
    createdAt: Date | null
  }

  export type MissionMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    type: $Enums.MissionType | null
    verificationType: string | null
    createdAt: Date | null
  }

  export type MissionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    verificationType: number
    verificationData: number
    createdAt: number
    _all: number
  }


  export type MissionAvgAggregateInputType = {
    id?: true
  }

  export type MissionSumAggregateInputType = {
    id?: true
  }

  export type MissionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    verificationType?: true
    createdAt?: true
  }

  export type MissionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    verificationType?: true
    createdAt?: true
  }

  export type MissionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    verificationType?: true
    verificationData?: true
    createdAt?: true
    _all?: true
  }

  export type MissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mission to aggregate.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Missions
    **/
    _count?: true | MissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionMaxAggregateInputType
  }

  export type GetMissionAggregateType<T extends MissionAggregateArgs> = {
        [P in keyof T & keyof AggregateMission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMission[P]>
      : GetScalarType<T[P], AggregateMission[P]>
  }




  export type MissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithAggregationInput | MissionOrderByWithAggregationInput[]
    by: MissionScalarFieldEnum[] | MissionScalarFieldEnum
    having?: MissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionCountAggregateInputType | true
    _avg?: MissionAvgAggregateInputType
    _sum?: MissionSumAggregateInputType
    _min?: MissionMinAggregateInputType
    _max?: MissionMaxAggregateInputType
  }

  export type MissionGroupByOutputType = {
    id: number
    title: string
    description: string
    type: $Enums.MissionType
    verificationType: string
    verificationData: JsonValue
    createdAt: Date
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  type GetMissionGroupByPayload<T extends MissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionGroupByOutputType[P]>
            : GetScalarType<T[P], MissionGroupByOutputType[P]>
        }
      >
    >


  export type MissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    verificationType?: boolean
    verificationData?: boolean
    createdAt?: boolean
    completions?: boolean | Mission$completionsArgs<ExtArgs>
    _count?: boolean | MissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mission"]>



  export type MissionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    verificationType?: boolean
    verificationData?: boolean
    createdAt?: boolean
  }

  export type MissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "type" | "verificationType" | "verificationData" | "createdAt", ExtArgs["result"]["mission"]>
  export type MissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completions?: boolean | Mission$completionsArgs<ExtArgs>
    _count?: boolean | MissionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mission"
    objects: {
      completions: Prisma.$MissionCompletionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      type: $Enums.MissionType
      verificationType: string
      verificationData: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["mission"]>
    composites: {}
  }

  type MissionGetPayload<S extends boolean | null | undefined | MissionDefaultArgs> = $Result.GetResult<Prisma.$MissionPayload, S>

  type MissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionCountAggregateInputType | true
    }

  export interface MissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mission'], meta: { name: 'Mission' } }
    /**
     * Find zero or one Mission that matches the filter.
     * @param {MissionFindUniqueArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionFindUniqueArgs>(args: SelectSubset<T, MissionFindUniqueArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionFindUniqueOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionFindFirstArgs>(args?: SelectSubset<T, MissionFindFirstArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Missions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Missions
     * const missions = await prisma.mission.findMany()
     * 
     * // Get first 10 Missions
     * const missions = await prisma.mission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionWithIdOnly = await prisma.mission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionFindManyArgs>(args?: SelectSubset<T, MissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mission.
     * @param {MissionCreateArgs} args - Arguments to create a Mission.
     * @example
     * // Create one Mission
     * const Mission = await prisma.mission.create({
     *   data: {
     *     // ... data to create a Mission
     *   }
     * })
     * 
     */
    create<T extends MissionCreateArgs>(args: SelectSubset<T, MissionCreateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Missions.
     * @param {MissionCreateManyArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const mission = await prisma.mission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionCreateManyArgs>(args?: SelectSubset<T, MissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mission.
     * @param {MissionDeleteArgs} args - Arguments to delete one Mission.
     * @example
     * // Delete one Mission
     * const Mission = await prisma.mission.delete({
     *   where: {
     *     // ... filter to delete one Mission
     *   }
     * })
     * 
     */
    delete<T extends MissionDeleteArgs>(args: SelectSubset<T, MissionDeleteArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mission.
     * @param {MissionUpdateArgs} args - Arguments to update one Mission.
     * @example
     * // Update one Mission
     * const mission = await prisma.mission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionUpdateArgs>(args: SelectSubset<T, MissionUpdateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Missions.
     * @param {MissionDeleteManyArgs} args - Arguments to filter Missions to delete.
     * @example
     * // Delete a few Missions
     * const { count } = await prisma.mission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionDeleteManyArgs>(args?: SelectSubset<T, MissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Missions
     * const mission = await prisma.mission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionUpdateManyArgs>(args: SelectSubset<T, MissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mission.
     * @param {MissionUpsertArgs} args - Arguments to update or create a Mission.
     * @example
     * // Update or create a Mission
     * const mission = await prisma.mission.upsert({
     *   create: {
     *     // ... data to create a Mission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mission we want to update
     *   }
     * })
     */
    upsert<T extends MissionUpsertArgs>(args: SelectSubset<T, MissionUpsertArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionCountArgs} args - Arguments to filter Missions to count.
     * @example
     * // Count the number of Missions
     * const count = await prisma.mission.count({
     *   where: {
     *     // ... the filter for the Missions we want to count
     *   }
     * })
    **/
    count<T extends MissionCountArgs>(
      args?: Subset<T, MissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MissionAggregateArgs>(args: Subset<T, MissionAggregateArgs>): Prisma.PrismaPromise<GetMissionAggregateType<T>>

    /**
     * Group by Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionGroupByArgs['orderBy'] }
        : { orderBy?: MissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mission model
   */
  readonly fields: MissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    completions<T extends Mission$completionsArgs<ExtArgs> = {}>(args?: Subset<T, Mission$completionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mission model
   */
  interface MissionFieldRefs {
    readonly id: FieldRef<"Mission", 'Int'>
    readonly title: FieldRef<"Mission", 'String'>
    readonly description: FieldRef<"Mission", 'String'>
    readonly type: FieldRef<"Mission", 'MissionType'>
    readonly verificationType: FieldRef<"Mission", 'String'>
    readonly verificationData: FieldRef<"Mission", 'Json'>
    readonly createdAt: FieldRef<"Mission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mission findUnique
   */
  export type MissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findUniqueOrThrow
   */
  export type MissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findFirst
   */
  export type MissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findFirstOrThrow
   */
  export type MissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findMany
   */
  export type MissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Missions to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission create
   */
  export type MissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Mission.
     */
    data: XOR<MissionCreateInput, MissionUncheckedCreateInput>
  }

  /**
   * Mission createMany
   */
  export type MissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Missions.
     */
    data: MissionCreateManyInput | MissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mission update
   */
  export type MissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Mission.
     */
    data: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
    /**
     * Choose, which Mission to update.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission updateMany
   */
  export type MissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Missions.
     */
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyInput>
    /**
     * Filter which Missions to update
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to update.
     */
    limit?: number
  }

  /**
   * Mission upsert
   */
  export type MissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Mission to update in case it exists.
     */
    where: MissionWhereUniqueInput
    /**
     * In case the Mission found by the `where` argument doesn't exist, create a new Mission with this data.
     */
    create: XOR<MissionCreateInput, MissionUncheckedCreateInput>
    /**
     * In case the Mission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
  }

  /**
   * Mission delete
   */
  export type MissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter which Mission to delete.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission deleteMany
   */
  export type MissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Missions to delete
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to delete.
     */
    limit?: number
  }

  /**
   * Mission.completions
   */
  export type Mission$completionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionCompletion
     */
    select?: MissionCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionCompletion
     */
    omit?: MissionCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionCompletionInclude<ExtArgs> | null
    where?: MissionCompletionWhereInput
    orderBy?: MissionCompletionOrderByWithRelationInput | MissionCompletionOrderByWithRelationInput[]
    cursor?: MissionCompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionCompletionScalarFieldEnum | MissionCompletionScalarFieldEnum[]
  }

  /**
   * Mission without action
   */
  export type MissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
  }


  /**
   * Model MissionCompletion
   */

  export type AggregateMissionCompletion = {
    _count: MissionCompletionCountAggregateOutputType | null
    _avg: MissionCompletionAvgAggregateOutputType | null
    _sum: MissionCompletionSumAggregateOutputType | null
    _min: MissionCompletionMinAggregateOutputType | null
    _max: MissionCompletionMaxAggregateOutputType | null
  }

  export type MissionCompletionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    missionId: number | null
  }

  export type MissionCompletionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    missionId: number | null
  }

  export type MissionCompletionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    missionId: number | null
    completedAt: Date | null
    status: $Enums.MissionStatus | null
    feedback: string | null
  }

  export type MissionCompletionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    missionId: number | null
    completedAt: Date | null
    status: $Enums.MissionStatus | null
    feedback: string | null
  }

  export type MissionCompletionCountAggregateOutputType = {
    id: number
    userId: number
    missionId: number
    completedAt: number
    verificationData: number
    status: number
    feedback: number
    _all: number
  }


  export type MissionCompletionAvgAggregateInputType = {
    id?: true
    userId?: true
    missionId?: true
  }

  export type MissionCompletionSumAggregateInputType = {
    id?: true
    userId?: true
    missionId?: true
  }

  export type MissionCompletionMinAggregateInputType = {
    id?: true
    userId?: true
    missionId?: true
    completedAt?: true
    status?: true
    feedback?: true
  }

  export type MissionCompletionMaxAggregateInputType = {
    id?: true
    userId?: true
    missionId?: true
    completedAt?: true
    status?: true
    feedback?: true
  }

  export type MissionCompletionCountAggregateInputType = {
    id?: true
    userId?: true
    missionId?: true
    completedAt?: true
    verificationData?: true
    status?: true
    feedback?: true
    _all?: true
  }

  export type MissionCompletionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissionCompletion to aggregate.
     */
    where?: MissionCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionCompletions to fetch.
     */
    orderBy?: MissionCompletionOrderByWithRelationInput | MissionCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MissionCompletions
    **/
    _count?: true | MissionCompletionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionCompletionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionCompletionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionCompletionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionCompletionMaxAggregateInputType
  }

  export type GetMissionCompletionAggregateType<T extends MissionCompletionAggregateArgs> = {
        [P in keyof T & keyof AggregateMissionCompletion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMissionCompletion[P]>
      : GetScalarType<T[P], AggregateMissionCompletion[P]>
  }




  export type MissionCompletionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionCompletionWhereInput
    orderBy?: MissionCompletionOrderByWithAggregationInput | MissionCompletionOrderByWithAggregationInput[]
    by: MissionCompletionScalarFieldEnum[] | MissionCompletionScalarFieldEnum
    having?: MissionCompletionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionCompletionCountAggregateInputType | true
    _avg?: MissionCompletionAvgAggregateInputType
    _sum?: MissionCompletionSumAggregateInputType
    _min?: MissionCompletionMinAggregateInputType
    _max?: MissionCompletionMaxAggregateInputType
  }

  export type MissionCompletionGroupByOutputType = {
    id: number
    userId: number
    missionId: number
    completedAt: Date
    verificationData: JsonValue
    status: $Enums.MissionStatus
    feedback: string | null
    _count: MissionCompletionCountAggregateOutputType | null
    _avg: MissionCompletionAvgAggregateOutputType | null
    _sum: MissionCompletionSumAggregateOutputType | null
    _min: MissionCompletionMinAggregateOutputType | null
    _max: MissionCompletionMaxAggregateOutputType | null
  }

  type GetMissionCompletionGroupByPayload<T extends MissionCompletionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionCompletionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionCompletionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionCompletionGroupByOutputType[P]>
            : GetScalarType<T[P], MissionCompletionGroupByOutputType[P]>
        }
      >
    >


  export type MissionCompletionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    missionId?: boolean
    completedAt?: boolean
    verificationData?: boolean
    status?: boolean
    feedback?: boolean
    mission?: boolean | MissionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    verifications?: boolean | MissionCompletion$verificationsArgs<ExtArgs>
    _count?: boolean | MissionCompletionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missionCompletion"]>



  export type MissionCompletionSelectScalar = {
    id?: boolean
    userId?: boolean
    missionId?: boolean
    completedAt?: boolean
    verificationData?: boolean
    status?: boolean
    feedback?: boolean
  }

  export type MissionCompletionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "missionId" | "completedAt" | "verificationData" | "status" | "feedback", ExtArgs["result"]["missionCompletion"]>
  export type MissionCompletionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mission?: boolean | MissionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    verifications?: boolean | MissionCompletion$verificationsArgs<ExtArgs>
    _count?: boolean | MissionCompletionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MissionCompletionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MissionCompletion"
    objects: {
      mission: Prisma.$MissionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      verifications: Prisma.$MissionVerificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      missionId: number
      completedAt: Date
      verificationData: Prisma.JsonValue
      status: $Enums.MissionStatus
      feedback: string | null
    }, ExtArgs["result"]["missionCompletion"]>
    composites: {}
  }

  type MissionCompletionGetPayload<S extends boolean | null | undefined | MissionCompletionDefaultArgs> = $Result.GetResult<Prisma.$MissionCompletionPayload, S>

  type MissionCompletionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionCompletionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionCompletionCountAggregateInputType | true
    }

  export interface MissionCompletionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MissionCompletion'], meta: { name: 'MissionCompletion' } }
    /**
     * Find zero or one MissionCompletion that matches the filter.
     * @param {MissionCompletionFindUniqueArgs} args - Arguments to find a MissionCompletion
     * @example
     * // Get one MissionCompletion
     * const missionCompletion = await prisma.missionCompletion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionCompletionFindUniqueArgs>(args: SelectSubset<T, MissionCompletionFindUniqueArgs<ExtArgs>>): Prisma__MissionCompletionClient<$Result.GetResult<Prisma.$MissionCompletionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MissionCompletion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionCompletionFindUniqueOrThrowArgs} args - Arguments to find a MissionCompletion
     * @example
     * // Get one MissionCompletion
     * const missionCompletion = await prisma.missionCompletion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionCompletionFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionCompletionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionCompletionClient<$Result.GetResult<Prisma.$MissionCompletionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissionCompletion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionCompletionFindFirstArgs} args - Arguments to find a MissionCompletion
     * @example
     * // Get one MissionCompletion
     * const missionCompletion = await prisma.missionCompletion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionCompletionFindFirstArgs>(args?: SelectSubset<T, MissionCompletionFindFirstArgs<ExtArgs>>): Prisma__MissionCompletionClient<$Result.GetResult<Prisma.$MissionCompletionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissionCompletion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionCompletionFindFirstOrThrowArgs} args - Arguments to find a MissionCompletion
     * @example
     * // Get one MissionCompletion
     * const missionCompletion = await prisma.missionCompletion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionCompletionFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionCompletionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionCompletionClient<$Result.GetResult<Prisma.$MissionCompletionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MissionCompletions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionCompletionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MissionCompletions
     * const missionCompletions = await prisma.missionCompletion.findMany()
     * 
     * // Get first 10 MissionCompletions
     * const missionCompletions = await prisma.missionCompletion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionCompletionWithIdOnly = await prisma.missionCompletion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionCompletionFindManyArgs>(args?: SelectSubset<T, MissionCompletionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MissionCompletion.
     * @param {MissionCompletionCreateArgs} args - Arguments to create a MissionCompletion.
     * @example
     * // Create one MissionCompletion
     * const MissionCompletion = await prisma.missionCompletion.create({
     *   data: {
     *     // ... data to create a MissionCompletion
     *   }
     * })
     * 
     */
    create<T extends MissionCompletionCreateArgs>(args: SelectSubset<T, MissionCompletionCreateArgs<ExtArgs>>): Prisma__MissionCompletionClient<$Result.GetResult<Prisma.$MissionCompletionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MissionCompletions.
     * @param {MissionCompletionCreateManyArgs} args - Arguments to create many MissionCompletions.
     * @example
     * // Create many MissionCompletions
     * const missionCompletion = await prisma.missionCompletion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionCompletionCreateManyArgs>(args?: SelectSubset<T, MissionCompletionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MissionCompletion.
     * @param {MissionCompletionDeleteArgs} args - Arguments to delete one MissionCompletion.
     * @example
     * // Delete one MissionCompletion
     * const MissionCompletion = await prisma.missionCompletion.delete({
     *   where: {
     *     // ... filter to delete one MissionCompletion
     *   }
     * })
     * 
     */
    delete<T extends MissionCompletionDeleteArgs>(args: SelectSubset<T, MissionCompletionDeleteArgs<ExtArgs>>): Prisma__MissionCompletionClient<$Result.GetResult<Prisma.$MissionCompletionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MissionCompletion.
     * @param {MissionCompletionUpdateArgs} args - Arguments to update one MissionCompletion.
     * @example
     * // Update one MissionCompletion
     * const missionCompletion = await prisma.missionCompletion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionCompletionUpdateArgs>(args: SelectSubset<T, MissionCompletionUpdateArgs<ExtArgs>>): Prisma__MissionCompletionClient<$Result.GetResult<Prisma.$MissionCompletionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MissionCompletions.
     * @param {MissionCompletionDeleteManyArgs} args - Arguments to filter MissionCompletions to delete.
     * @example
     * // Delete a few MissionCompletions
     * const { count } = await prisma.missionCompletion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionCompletionDeleteManyArgs>(args?: SelectSubset<T, MissionCompletionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MissionCompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionCompletionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MissionCompletions
     * const missionCompletion = await prisma.missionCompletion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionCompletionUpdateManyArgs>(args: SelectSubset<T, MissionCompletionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MissionCompletion.
     * @param {MissionCompletionUpsertArgs} args - Arguments to update or create a MissionCompletion.
     * @example
     * // Update or create a MissionCompletion
     * const missionCompletion = await prisma.missionCompletion.upsert({
     *   create: {
     *     // ... data to create a MissionCompletion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MissionCompletion we want to update
     *   }
     * })
     */
    upsert<T extends MissionCompletionUpsertArgs>(args: SelectSubset<T, MissionCompletionUpsertArgs<ExtArgs>>): Prisma__MissionCompletionClient<$Result.GetResult<Prisma.$MissionCompletionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MissionCompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionCompletionCountArgs} args - Arguments to filter MissionCompletions to count.
     * @example
     * // Count the number of MissionCompletions
     * const count = await prisma.missionCompletion.count({
     *   where: {
     *     // ... the filter for the MissionCompletions we want to count
     *   }
     * })
    **/
    count<T extends MissionCompletionCountArgs>(
      args?: Subset<T, MissionCompletionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionCompletionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MissionCompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionCompletionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MissionCompletionAggregateArgs>(args: Subset<T, MissionCompletionAggregateArgs>): Prisma.PrismaPromise<GetMissionCompletionAggregateType<T>>

    /**
     * Group by MissionCompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionCompletionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MissionCompletionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionCompletionGroupByArgs['orderBy'] }
        : { orderBy?: MissionCompletionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MissionCompletionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionCompletionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MissionCompletion model
   */
  readonly fields: MissionCompletionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MissionCompletion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionCompletionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mission<T extends MissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MissionDefaultArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    verifications<T extends MissionCompletion$verificationsArgs<ExtArgs> = {}>(args?: Subset<T, MissionCompletion$verificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MissionCompletion model
   */
  interface MissionCompletionFieldRefs {
    readonly id: FieldRef<"MissionCompletion", 'Int'>
    readonly userId: FieldRef<"MissionCompletion", 'Int'>
    readonly missionId: FieldRef<"MissionCompletion", 'Int'>
    readonly completedAt: FieldRef<"MissionCompletion", 'DateTime'>
    readonly verificationData: FieldRef<"MissionCompletion", 'Json'>
    readonly status: FieldRef<"MissionCompletion", 'MissionStatus'>
    readonly feedback: FieldRef<"MissionCompletion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MissionCompletion findUnique
   */
  export type MissionCompletionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionCompletion
     */
    select?: MissionCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionCompletion
     */
    omit?: MissionCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionCompletionInclude<ExtArgs> | null
    /**
     * Filter, which MissionCompletion to fetch.
     */
    where: MissionCompletionWhereUniqueInput
  }

  /**
   * MissionCompletion findUniqueOrThrow
   */
  export type MissionCompletionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionCompletion
     */
    select?: MissionCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionCompletion
     */
    omit?: MissionCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionCompletionInclude<ExtArgs> | null
    /**
     * Filter, which MissionCompletion to fetch.
     */
    where: MissionCompletionWhereUniqueInput
  }

  /**
   * MissionCompletion findFirst
   */
  export type MissionCompletionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionCompletion
     */
    select?: MissionCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionCompletion
     */
    omit?: MissionCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionCompletionInclude<ExtArgs> | null
    /**
     * Filter, which MissionCompletion to fetch.
     */
    where?: MissionCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionCompletions to fetch.
     */
    orderBy?: MissionCompletionOrderByWithRelationInput | MissionCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissionCompletions.
     */
    cursor?: MissionCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionCompletions.
     */
    distinct?: MissionCompletionScalarFieldEnum | MissionCompletionScalarFieldEnum[]
  }

  /**
   * MissionCompletion findFirstOrThrow
   */
  export type MissionCompletionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionCompletion
     */
    select?: MissionCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionCompletion
     */
    omit?: MissionCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionCompletionInclude<ExtArgs> | null
    /**
     * Filter, which MissionCompletion to fetch.
     */
    where?: MissionCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionCompletions to fetch.
     */
    orderBy?: MissionCompletionOrderByWithRelationInput | MissionCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissionCompletions.
     */
    cursor?: MissionCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionCompletions.
     */
    distinct?: MissionCompletionScalarFieldEnum | MissionCompletionScalarFieldEnum[]
  }

  /**
   * MissionCompletion findMany
   */
  export type MissionCompletionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionCompletion
     */
    select?: MissionCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionCompletion
     */
    omit?: MissionCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionCompletionInclude<ExtArgs> | null
    /**
     * Filter, which MissionCompletions to fetch.
     */
    where?: MissionCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionCompletions to fetch.
     */
    orderBy?: MissionCompletionOrderByWithRelationInput | MissionCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MissionCompletions.
     */
    cursor?: MissionCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionCompletions.
     */
    skip?: number
    distinct?: MissionCompletionScalarFieldEnum | MissionCompletionScalarFieldEnum[]
  }

  /**
   * MissionCompletion create
   */
  export type MissionCompletionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionCompletion
     */
    select?: MissionCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionCompletion
     */
    omit?: MissionCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionCompletionInclude<ExtArgs> | null
    /**
     * The data needed to create a MissionCompletion.
     */
    data: XOR<MissionCompletionCreateInput, MissionCompletionUncheckedCreateInput>
  }

  /**
   * MissionCompletion createMany
   */
  export type MissionCompletionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MissionCompletions.
     */
    data: MissionCompletionCreateManyInput | MissionCompletionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MissionCompletion update
   */
  export type MissionCompletionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionCompletion
     */
    select?: MissionCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionCompletion
     */
    omit?: MissionCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionCompletionInclude<ExtArgs> | null
    /**
     * The data needed to update a MissionCompletion.
     */
    data: XOR<MissionCompletionUpdateInput, MissionCompletionUncheckedUpdateInput>
    /**
     * Choose, which MissionCompletion to update.
     */
    where: MissionCompletionWhereUniqueInput
  }

  /**
   * MissionCompletion updateMany
   */
  export type MissionCompletionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MissionCompletions.
     */
    data: XOR<MissionCompletionUpdateManyMutationInput, MissionCompletionUncheckedUpdateManyInput>
    /**
     * Filter which MissionCompletions to update
     */
    where?: MissionCompletionWhereInput
    /**
     * Limit how many MissionCompletions to update.
     */
    limit?: number
  }

  /**
   * MissionCompletion upsert
   */
  export type MissionCompletionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionCompletion
     */
    select?: MissionCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionCompletion
     */
    omit?: MissionCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionCompletionInclude<ExtArgs> | null
    /**
     * The filter to search for the MissionCompletion to update in case it exists.
     */
    where: MissionCompletionWhereUniqueInput
    /**
     * In case the MissionCompletion found by the `where` argument doesn't exist, create a new MissionCompletion with this data.
     */
    create: XOR<MissionCompletionCreateInput, MissionCompletionUncheckedCreateInput>
    /**
     * In case the MissionCompletion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionCompletionUpdateInput, MissionCompletionUncheckedUpdateInput>
  }

  /**
   * MissionCompletion delete
   */
  export type MissionCompletionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionCompletion
     */
    select?: MissionCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionCompletion
     */
    omit?: MissionCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionCompletionInclude<ExtArgs> | null
    /**
     * Filter which MissionCompletion to delete.
     */
    where: MissionCompletionWhereUniqueInput
  }

  /**
   * MissionCompletion deleteMany
   */
  export type MissionCompletionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissionCompletions to delete
     */
    where?: MissionCompletionWhereInput
    /**
     * Limit how many MissionCompletions to delete.
     */
    limit?: number
  }

  /**
   * MissionCompletion.verifications
   */
  export type MissionCompletion$verificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionVerification
     */
    select?: MissionVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionVerification
     */
    omit?: MissionVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionVerificationInclude<ExtArgs> | null
    where?: MissionVerificationWhereInput
    orderBy?: MissionVerificationOrderByWithRelationInput | MissionVerificationOrderByWithRelationInput[]
    cursor?: MissionVerificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionVerificationScalarFieldEnum | MissionVerificationScalarFieldEnum[]
  }

  /**
   * MissionCompletion without action
   */
  export type MissionCompletionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionCompletion
     */
    select?: MissionCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionCompletion
     */
    omit?: MissionCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionCompletionInclude<ExtArgs> | null
  }


  /**
   * Model MissionVerification
   */

  export type AggregateMissionVerification = {
    _count: MissionVerificationCountAggregateOutputType | null
    _avg: MissionVerificationAvgAggregateOutputType | null
    _sum: MissionVerificationSumAggregateOutputType | null
    _min: MissionVerificationMinAggregateOutputType | null
    _max: MissionVerificationMaxAggregateOutputType | null
  }

  export type MissionVerificationAvgAggregateOutputType = {
    id: number | null
    missionCompletionId: number | null
  }

  export type MissionVerificationSumAggregateOutputType = {
    id: number | null
    missionCompletionId: number | null
  }

  export type MissionVerificationMinAggregateOutputType = {
    id: number | null
    missionCompletionId: number | null
    type: string | null
    createdAt: Date | null
  }

  export type MissionVerificationMaxAggregateOutputType = {
    id: number | null
    missionCompletionId: number | null
    type: string | null
    createdAt: Date | null
  }

  export type MissionVerificationCountAggregateOutputType = {
    id: number
    missionCompletionId: number
    type: number
    data: number
    createdAt: number
    _all: number
  }


  export type MissionVerificationAvgAggregateInputType = {
    id?: true
    missionCompletionId?: true
  }

  export type MissionVerificationSumAggregateInputType = {
    id?: true
    missionCompletionId?: true
  }

  export type MissionVerificationMinAggregateInputType = {
    id?: true
    missionCompletionId?: true
    type?: true
    createdAt?: true
  }

  export type MissionVerificationMaxAggregateInputType = {
    id?: true
    missionCompletionId?: true
    type?: true
    createdAt?: true
  }

  export type MissionVerificationCountAggregateInputType = {
    id?: true
    missionCompletionId?: true
    type?: true
    data?: true
    createdAt?: true
    _all?: true
  }

  export type MissionVerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissionVerification to aggregate.
     */
    where?: MissionVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionVerifications to fetch.
     */
    orderBy?: MissionVerificationOrderByWithRelationInput | MissionVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MissionVerifications
    **/
    _count?: true | MissionVerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionVerificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionVerificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionVerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionVerificationMaxAggregateInputType
  }

  export type GetMissionVerificationAggregateType<T extends MissionVerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateMissionVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMissionVerification[P]>
      : GetScalarType<T[P], AggregateMissionVerification[P]>
  }




  export type MissionVerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionVerificationWhereInput
    orderBy?: MissionVerificationOrderByWithAggregationInput | MissionVerificationOrderByWithAggregationInput[]
    by: MissionVerificationScalarFieldEnum[] | MissionVerificationScalarFieldEnum
    having?: MissionVerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionVerificationCountAggregateInputType | true
    _avg?: MissionVerificationAvgAggregateInputType
    _sum?: MissionVerificationSumAggregateInputType
    _min?: MissionVerificationMinAggregateInputType
    _max?: MissionVerificationMaxAggregateInputType
  }

  export type MissionVerificationGroupByOutputType = {
    id: number
    missionCompletionId: number
    type: string
    data: JsonValue
    createdAt: Date
    _count: MissionVerificationCountAggregateOutputType | null
    _avg: MissionVerificationAvgAggregateOutputType | null
    _sum: MissionVerificationSumAggregateOutputType | null
    _min: MissionVerificationMinAggregateOutputType | null
    _max: MissionVerificationMaxAggregateOutputType | null
  }

  type GetMissionVerificationGroupByPayload<T extends MissionVerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionVerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionVerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionVerificationGroupByOutputType[P]>
            : GetScalarType<T[P], MissionVerificationGroupByOutputType[P]>
        }
      >
    >


  export type MissionVerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionCompletionId?: boolean
    type?: boolean
    data?: boolean
    createdAt?: boolean
    missionCompletion?: boolean | MissionCompletionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missionVerification"]>



  export type MissionVerificationSelectScalar = {
    id?: boolean
    missionCompletionId?: boolean
    type?: boolean
    data?: boolean
    createdAt?: boolean
  }

  export type MissionVerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "missionCompletionId" | "type" | "data" | "createdAt", ExtArgs["result"]["missionVerification"]>
  export type MissionVerificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missionCompletion?: boolean | MissionCompletionDefaultArgs<ExtArgs>
  }

  export type $MissionVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MissionVerification"
    objects: {
      missionCompletion: Prisma.$MissionCompletionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      missionCompletionId: number
      type: string
      data: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["missionVerification"]>
    composites: {}
  }

  type MissionVerificationGetPayload<S extends boolean | null | undefined | MissionVerificationDefaultArgs> = $Result.GetResult<Prisma.$MissionVerificationPayload, S>

  type MissionVerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionVerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionVerificationCountAggregateInputType | true
    }

  export interface MissionVerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MissionVerification'], meta: { name: 'MissionVerification' } }
    /**
     * Find zero or one MissionVerification that matches the filter.
     * @param {MissionVerificationFindUniqueArgs} args - Arguments to find a MissionVerification
     * @example
     * // Get one MissionVerification
     * const missionVerification = await prisma.missionVerification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionVerificationFindUniqueArgs>(args: SelectSubset<T, MissionVerificationFindUniqueArgs<ExtArgs>>): Prisma__MissionVerificationClient<$Result.GetResult<Prisma.$MissionVerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MissionVerification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionVerificationFindUniqueOrThrowArgs} args - Arguments to find a MissionVerification
     * @example
     * // Get one MissionVerification
     * const missionVerification = await prisma.missionVerification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionVerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionVerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionVerificationClient<$Result.GetResult<Prisma.$MissionVerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissionVerification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionVerificationFindFirstArgs} args - Arguments to find a MissionVerification
     * @example
     * // Get one MissionVerification
     * const missionVerification = await prisma.missionVerification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionVerificationFindFirstArgs>(args?: SelectSubset<T, MissionVerificationFindFirstArgs<ExtArgs>>): Prisma__MissionVerificationClient<$Result.GetResult<Prisma.$MissionVerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissionVerification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionVerificationFindFirstOrThrowArgs} args - Arguments to find a MissionVerification
     * @example
     * // Get one MissionVerification
     * const missionVerification = await prisma.missionVerification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionVerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionVerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionVerificationClient<$Result.GetResult<Prisma.$MissionVerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MissionVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionVerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MissionVerifications
     * const missionVerifications = await prisma.missionVerification.findMany()
     * 
     * // Get first 10 MissionVerifications
     * const missionVerifications = await prisma.missionVerification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionVerificationWithIdOnly = await prisma.missionVerification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionVerificationFindManyArgs>(args?: SelectSubset<T, MissionVerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MissionVerification.
     * @param {MissionVerificationCreateArgs} args - Arguments to create a MissionVerification.
     * @example
     * // Create one MissionVerification
     * const MissionVerification = await prisma.missionVerification.create({
     *   data: {
     *     // ... data to create a MissionVerification
     *   }
     * })
     * 
     */
    create<T extends MissionVerificationCreateArgs>(args: SelectSubset<T, MissionVerificationCreateArgs<ExtArgs>>): Prisma__MissionVerificationClient<$Result.GetResult<Prisma.$MissionVerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MissionVerifications.
     * @param {MissionVerificationCreateManyArgs} args - Arguments to create many MissionVerifications.
     * @example
     * // Create many MissionVerifications
     * const missionVerification = await prisma.missionVerification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionVerificationCreateManyArgs>(args?: SelectSubset<T, MissionVerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MissionVerification.
     * @param {MissionVerificationDeleteArgs} args - Arguments to delete one MissionVerification.
     * @example
     * // Delete one MissionVerification
     * const MissionVerification = await prisma.missionVerification.delete({
     *   where: {
     *     // ... filter to delete one MissionVerification
     *   }
     * })
     * 
     */
    delete<T extends MissionVerificationDeleteArgs>(args: SelectSubset<T, MissionVerificationDeleteArgs<ExtArgs>>): Prisma__MissionVerificationClient<$Result.GetResult<Prisma.$MissionVerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MissionVerification.
     * @param {MissionVerificationUpdateArgs} args - Arguments to update one MissionVerification.
     * @example
     * // Update one MissionVerification
     * const missionVerification = await prisma.missionVerification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionVerificationUpdateArgs>(args: SelectSubset<T, MissionVerificationUpdateArgs<ExtArgs>>): Prisma__MissionVerificationClient<$Result.GetResult<Prisma.$MissionVerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MissionVerifications.
     * @param {MissionVerificationDeleteManyArgs} args - Arguments to filter MissionVerifications to delete.
     * @example
     * // Delete a few MissionVerifications
     * const { count } = await prisma.missionVerification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionVerificationDeleteManyArgs>(args?: SelectSubset<T, MissionVerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MissionVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionVerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MissionVerifications
     * const missionVerification = await prisma.missionVerification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionVerificationUpdateManyArgs>(args: SelectSubset<T, MissionVerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MissionVerification.
     * @param {MissionVerificationUpsertArgs} args - Arguments to update or create a MissionVerification.
     * @example
     * // Update or create a MissionVerification
     * const missionVerification = await prisma.missionVerification.upsert({
     *   create: {
     *     // ... data to create a MissionVerification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MissionVerification we want to update
     *   }
     * })
     */
    upsert<T extends MissionVerificationUpsertArgs>(args: SelectSubset<T, MissionVerificationUpsertArgs<ExtArgs>>): Prisma__MissionVerificationClient<$Result.GetResult<Prisma.$MissionVerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MissionVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionVerificationCountArgs} args - Arguments to filter MissionVerifications to count.
     * @example
     * // Count the number of MissionVerifications
     * const count = await prisma.missionVerification.count({
     *   where: {
     *     // ... the filter for the MissionVerifications we want to count
     *   }
     * })
    **/
    count<T extends MissionVerificationCountArgs>(
      args?: Subset<T, MissionVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionVerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MissionVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionVerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MissionVerificationAggregateArgs>(args: Subset<T, MissionVerificationAggregateArgs>): Prisma.PrismaPromise<GetMissionVerificationAggregateType<T>>

    /**
     * Group by MissionVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionVerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MissionVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionVerificationGroupByArgs['orderBy'] }
        : { orderBy?: MissionVerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MissionVerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MissionVerification model
   */
  readonly fields: MissionVerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MissionVerification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionVerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    missionCompletion<T extends MissionCompletionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MissionCompletionDefaultArgs<ExtArgs>>): Prisma__MissionCompletionClient<$Result.GetResult<Prisma.$MissionCompletionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MissionVerification model
   */
  interface MissionVerificationFieldRefs {
    readonly id: FieldRef<"MissionVerification", 'Int'>
    readonly missionCompletionId: FieldRef<"MissionVerification", 'Int'>
    readonly type: FieldRef<"MissionVerification", 'String'>
    readonly data: FieldRef<"MissionVerification", 'Json'>
    readonly createdAt: FieldRef<"MissionVerification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MissionVerification findUnique
   */
  export type MissionVerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionVerification
     */
    select?: MissionVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionVerification
     */
    omit?: MissionVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionVerificationInclude<ExtArgs> | null
    /**
     * Filter, which MissionVerification to fetch.
     */
    where: MissionVerificationWhereUniqueInput
  }

  /**
   * MissionVerification findUniqueOrThrow
   */
  export type MissionVerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionVerification
     */
    select?: MissionVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionVerification
     */
    omit?: MissionVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionVerificationInclude<ExtArgs> | null
    /**
     * Filter, which MissionVerification to fetch.
     */
    where: MissionVerificationWhereUniqueInput
  }

  /**
   * MissionVerification findFirst
   */
  export type MissionVerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionVerification
     */
    select?: MissionVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionVerification
     */
    omit?: MissionVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionVerificationInclude<ExtArgs> | null
    /**
     * Filter, which MissionVerification to fetch.
     */
    where?: MissionVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionVerifications to fetch.
     */
    orderBy?: MissionVerificationOrderByWithRelationInput | MissionVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissionVerifications.
     */
    cursor?: MissionVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionVerifications.
     */
    distinct?: MissionVerificationScalarFieldEnum | MissionVerificationScalarFieldEnum[]
  }

  /**
   * MissionVerification findFirstOrThrow
   */
  export type MissionVerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionVerification
     */
    select?: MissionVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionVerification
     */
    omit?: MissionVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionVerificationInclude<ExtArgs> | null
    /**
     * Filter, which MissionVerification to fetch.
     */
    where?: MissionVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionVerifications to fetch.
     */
    orderBy?: MissionVerificationOrderByWithRelationInput | MissionVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissionVerifications.
     */
    cursor?: MissionVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionVerifications.
     */
    distinct?: MissionVerificationScalarFieldEnum | MissionVerificationScalarFieldEnum[]
  }

  /**
   * MissionVerification findMany
   */
  export type MissionVerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionVerification
     */
    select?: MissionVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionVerification
     */
    omit?: MissionVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionVerificationInclude<ExtArgs> | null
    /**
     * Filter, which MissionVerifications to fetch.
     */
    where?: MissionVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionVerifications to fetch.
     */
    orderBy?: MissionVerificationOrderByWithRelationInput | MissionVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MissionVerifications.
     */
    cursor?: MissionVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionVerifications.
     */
    skip?: number
    distinct?: MissionVerificationScalarFieldEnum | MissionVerificationScalarFieldEnum[]
  }

  /**
   * MissionVerification create
   */
  export type MissionVerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionVerification
     */
    select?: MissionVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionVerification
     */
    omit?: MissionVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionVerificationInclude<ExtArgs> | null
    /**
     * The data needed to create a MissionVerification.
     */
    data: XOR<MissionVerificationCreateInput, MissionVerificationUncheckedCreateInput>
  }

  /**
   * MissionVerification createMany
   */
  export type MissionVerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MissionVerifications.
     */
    data: MissionVerificationCreateManyInput | MissionVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MissionVerification update
   */
  export type MissionVerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionVerification
     */
    select?: MissionVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionVerification
     */
    omit?: MissionVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionVerificationInclude<ExtArgs> | null
    /**
     * The data needed to update a MissionVerification.
     */
    data: XOR<MissionVerificationUpdateInput, MissionVerificationUncheckedUpdateInput>
    /**
     * Choose, which MissionVerification to update.
     */
    where: MissionVerificationWhereUniqueInput
  }

  /**
   * MissionVerification updateMany
   */
  export type MissionVerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MissionVerifications.
     */
    data: XOR<MissionVerificationUpdateManyMutationInput, MissionVerificationUncheckedUpdateManyInput>
    /**
     * Filter which MissionVerifications to update
     */
    where?: MissionVerificationWhereInput
    /**
     * Limit how many MissionVerifications to update.
     */
    limit?: number
  }

  /**
   * MissionVerification upsert
   */
  export type MissionVerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionVerification
     */
    select?: MissionVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionVerification
     */
    omit?: MissionVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionVerificationInclude<ExtArgs> | null
    /**
     * The filter to search for the MissionVerification to update in case it exists.
     */
    where: MissionVerificationWhereUniqueInput
    /**
     * In case the MissionVerification found by the `where` argument doesn't exist, create a new MissionVerification with this data.
     */
    create: XOR<MissionVerificationCreateInput, MissionVerificationUncheckedCreateInput>
    /**
     * In case the MissionVerification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionVerificationUpdateInput, MissionVerificationUncheckedUpdateInput>
  }

  /**
   * MissionVerification delete
   */
  export type MissionVerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionVerification
     */
    select?: MissionVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionVerification
     */
    omit?: MissionVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionVerificationInclude<ExtArgs> | null
    /**
     * Filter which MissionVerification to delete.
     */
    where: MissionVerificationWhereUniqueInput
  }

  /**
   * MissionVerification deleteMany
   */
  export type MissionVerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissionVerifications to delete
     */
    where?: MissionVerificationWhereInput
    /**
     * Limit how many MissionVerifications to delete.
     */
    limit?: number
  }

  /**
   * MissionVerification without action
   */
  export type MissionVerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionVerification
     */
    select?: MissionVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionVerification
     */
    omit?: MissionVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionVerificationInclude<ExtArgs> | null
  }


  /**
   * Model Badge
   */

  export type AggregateBadge = {
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  export type BadgeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BadgeSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BadgeMinAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    imageUrl: string | null
    createdAt: Date | null
  }

  export type BadgeMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    imageUrl: string | null
    createdAt: Date | null
  }

  export type BadgeCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    imageUrl: number
    createdAt: number
    _all: number
  }


  export type BadgeAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BadgeSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BadgeMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    imageUrl?: true
    createdAt?: true
  }

  export type BadgeMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    imageUrl?: true
    createdAt?: true
  }

  export type BadgeCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    imageUrl?: true
    createdAt?: true
    _all?: true
  }

  export type BadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badge to aggregate.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Badges
    **/
    _count?: true | BadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BadgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BadgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BadgeMaxAggregateInputType
  }

  export type GetBadgeAggregateType<T extends BadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBadge[P]>
      : GetScalarType<T[P], AggregateBadge[P]>
  }




  export type BadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgeWhereInput
    orderBy?: BadgeOrderByWithAggregationInput | BadgeOrderByWithAggregationInput[]
    by: BadgeScalarFieldEnum[] | BadgeScalarFieldEnum
    having?: BadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BadgeCountAggregateInputType | true
    _avg?: BadgeAvgAggregateInputType
    _sum?: BadgeSumAggregateInputType
    _min?: BadgeMinAggregateInputType
    _max?: BadgeMaxAggregateInputType
  }

  export type BadgeGroupByOutputType = {
    id: number
    userId: number
    name: string
    imageUrl: string | null
    createdAt: Date
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  type GetBadgeGroupByPayload<T extends BadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BadgeGroupByOutputType[P]>
            : GetScalarType<T[P], BadgeGroupByOutputType[P]>
        }
      >
    >


  export type BadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["badge"]>



  export type BadgeSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    imageUrl?: boolean
    createdAt?: boolean
  }

  export type BadgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "imageUrl" | "createdAt", ExtArgs["result"]["badge"]>
  export type BadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Badge"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      name: string
      imageUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["badge"]>
    composites: {}
  }

  type BadgeGetPayload<S extends boolean | null | undefined | BadgeDefaultArgs> = $Result.GetResult<Prisma.$BadgePayload, S>

  type BadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BadgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BadgeCountAggregateInputType | true
    }

  export interface BadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Badge'], meta: { name: 'Badge' } }
    /**
     * Find zero or one Badge that matches the filter.
     * @param {BadgeFindUniqueArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BadgeFindUniqueArgs>(args: SelectSubset<T, BadgeFindUniqueArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Badge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BadgeFindUniqueOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, BadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Badge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BadgeFindFirstArgs>(args?: SelectSubset<T, BadgeFindFirstArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Badge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, BadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Badges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Badges
     * const badges = await prisma.badge.findMany()
     * 
     * // Get first 10 Badges
     * const badges = await prisma.badge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const badgeWithIdOnly = await prisma.badge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BadgeFindManyArgs>(args?: SelectSubset<T, BadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Badge.
     * @param {BadgeCreateArgs} args - Arguments to create a Badge.
     * @example
     * // Create one Badge
     * const Badge = await prisma.badge.create({
     *   data: {
     *     // ... data to create a Badge
     *   }
     * })
     * 
     */
    create<T extends BadgeCreateArgs>(args: SelectSubset<T, BadgeCreateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Badges.
     * @param {BadgeCreateManyArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BadgeCreateManyArgs>(args?: SelectSubset<T, BadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Badge.
     * @param {BadgeDeleteArgs} args - Arguments to delete one Badge.
     * @example
     * // Delete one Badge
     * const Badge = await prisma.badge.delete({
     *   where: {
     *     // ... filter to delete one Badge
     *   }
     * })
     * 
     */
    delete<T extends BadgeDeleteArgs>(args: SelectSubset<T, BadgeDeleteArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Badge.
     * @param {BadgeUpdateArgs} args - Arguments to update one Badge.
     * @example
     * // Update one Badge
     * const badge = await prisma.badge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BadgeUpdateArgs>(args: SelectSubset<T, BadgeUpdateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Badges.
     * @param {BadgeDeleteManyArgs} args - Arguments to filter Badges to delete.
     * @example
     * // Delete a few Badges
     * const { count } = await prisma.badge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BadgeDeleteManyArgs>(args?: SelectSubset<T, BadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Badges
     * const badge = await prisma.badge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BadgeUpdateManyArgs>(args: SelectSubset<T, BadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Badge.
     * @param {BadgeUpsertArgs} args - Arguments to update or create a Badge.
     * @example
     * // Update or create a Badge
     * const badge = await prisma.badge.upsert({
     *   create: {
     *     // ... data to create a Badge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Badge we want to update
     *   }
     * })
     */
    upsert<T extends BadgeUpsertArgs>(args: SelectSubset<T, BadgeUpsertArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeCountArgs} args - Arguments to filter Badges to count.
     * @example
     * // Count the number of Badges
     * const count = await prisma.badge.count({
     *   where: {
     *     // ... the filter for the Badges we want to count
     *   }
     * })
    **/
    count<T extends BadgeCountArgs>(
      args?: Subset<T, BadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BadgeAggregateArgs>(args: Subset<T, BadgeAggregateArgs>): Prisma.PrismaPromise<GetBadgeAggregateType<T>>

    /**
     * Group by Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BadgeGroupByArgs['orderBy'] }
        : { orderBy?: BadgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Badge model
   */
  readonly fields: BadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Badge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Badge model
   */
  interface BadgeFieldRefs {
    readonly id: FieldRef<"Badge", 'Int'>
    readonly userId: FieldRef<"Badge", 'Int'>
    readonly name: FieldRef<"Badge", 'String'>
    readonly imageUrl: FieldRef<"Badge", 'String'>
    readonly createdAt: FieldRef<"Badge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Badge findUnique
   */
  export type BadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findUniqueOrThrow
   */
  export type BadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findFirst
   */
  export type BadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findFirstOrThrow
   */
  export type BadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findMany
   */
  export type BadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badges to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge create
   */
  export type BadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a Badge.
     */
    data: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
  }

  /**
   * Badge createMany
   */
  export type BadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Badges.
     */
    data: BadgeCreateManyInput | BadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Badge update
   */
  export type BadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a Badge.
     */
    data: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
    /**
     * Choose, which Badge to update.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge updateMany
   */
  export type BadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Badges.
     */
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyInput>
    /**
     * Filter which Badges to update
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to update.
     */
    limit?: number
  }

  /**
   * Badge upsert
   */
  export type BadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the Badge to update in case it exists.
     */
    where: BadgeWhereUniqueInput
    /**
     * In case the Badge found by the `where` argument doesn't exist, create a new Badge with this data.
     */
    create: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
    /**
     * In case the Badge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
  }

  /**
   * Badge delete
   */
  export type BadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter which Badge to delete.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge deleteMany
   */
  export type BadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badges to delete
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to delete.
     */
    limit?: number
  }

  /**
   * Badge without action
   */
  export type BadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
  }


  /**
   * Model Friend
   */

  export type AggregateFriend = {
    _count: FriendCountAggregateOutputType | null
    _avg: FriendAvgAggregateOutputType | null
    _sum: FriendSumAggregateOutputType | null
    _min: FriendMinAggregateOutputType | null
    _max: FriendMaxAggregateOutputType | null
  }

  export type FriendAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
  }

  export type FriendSumAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
  }

  export type FriendMinAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
    createdAt: Date | null
  }

  export type FriendMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
    createdAt: Date | null
  }

  export type FriendCountAggregateOutputType = {
    id: number
    userId: number
    friendId: number
    createdAt: number
    _all: number
  }


  export type FriendAvgAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
  }

  export type FriendSumAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
  }

  export type FriendMinAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    createdAt?: true
  }

  export type FriendMaxAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    createdAt?: true
  }

  export type FriendCountAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    createdAt?: true
    _all?: true
  }

  export type FriendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friend to aggregate.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friends
    **/
    _count?: true | FriendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FriendAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FriendSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendMaxAggregateInputType
  }

  export type GetFriendAggregateType<T extends FriendAggregateArgs> = {
        [P in keyof T & keyof AggregateFriend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriend[P]>
      : GetScalarType<T[P], AggregateFriend[P]>
  }




  export type FriendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithAggregationInput | FriendOrderByWithAggregationInput[]
    by: FriendScalarFieldEnum[] | FriendScalarFieldEnum
    having?: FriendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendCountAggregateInputType | true
    _avg?: FriendAvgAggregateInputType
    _sum?: FriendSumAggregateInputType
    _min?: FriendMinAggregateInputType
    _max?: FriendMaxAggregateInputType
  }

  export type FriendGroupByOutputType = {
    id: number
    userId: number
    friendId: number
    createdAt: Date
    _count: FriendCountAggregateOutputType | null
    _avg: FriendAvgAggregateOutputType | null
    _sum: FriendSumAggregateOutputType | null
    _min: FriendMinAggregateOutputType | null
    _max: FriendMaxAggregateOutputType | null
  }

  type GetFriendGroupByPayload<T extends FriendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendGroupByOutputType[P]>
            : GetScalarType<T[P], FriendGroupByOutputType[P]>
        }
      >
    >


  export type FriendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    createdAt?: boolean
    friend?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friend"]>



  export type FriendSelectScalar = {
    id?: boolean
    userId?: boolean
    friendId?: boolean
    createdAt?: boolean
  }

  export type FriendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "friendId" | "createdAt", ExtArgs["result"]["friend"]>
  export type FriendInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friend?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friend"
    objects: {
      friend: Prisma.$UserPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      friendId: number
      createdAt: Date
    }, ExtArgs["result"]["friend"]>
    composites: {}
  }

  type FriendGetPayload<S extends boolean | null | undefined | FriendDefaultArgs> = $Result.GetResult<Prisma.$FriendPayload, S>

  type FriendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendCountAggregateInputType | true
    }

  export interface FriendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friend'], meta: { name: 'Friend' } }
    /**
     * Find zero or one Friend that matches the filter.
     * @param {FriendFindUniqueArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendFindUniqueArgs>(args: SelectSubset<T, FriendFindUniqueArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendFindUniqueOrThrowArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindFirstArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendFindFirstArgs>(args?: SelectSubset<T, FriendFindFirstArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindFirstOrThrowArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friends
     * const friends = await prisma.friend.findMany()
     * 
     * // Get first 10 Friends
     * const friends = await prisma.friend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendWithIdOnly = await prisma.friend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendFindManyArgs>(args?: SelectSubset<T, FriendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friend.
     * @param {FriendCreateArgs} args - Arguments to create a Friend.
     * @example
     * // Create one Friend
     * const Friend = await prisma.friend.create({
     *   data: {
     *     // ... data to create a Friend
     *   }
     * })
     * 
     */
    create<T extends FriendCreateArgs>(args: SelectSubset<T, FriendCreateArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friends.
     * @param {FriendCreateManyArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friend = await prisma.friend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendCreateManyArgs>(args?: SelectSubset<T, FriendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Friend.
     * @param {FriendDeleteArgs} args - Arguments to delete one Friend.
     * @example
     * // Delete one Friend
     * const Friend = await prisma.friend.delete({
     *   where: {
     *     // ... filter to delete one Friend
     *   }
     * })
     * 
     */
    delete<T extends FriendDeleteArgs>(args: SelectSubset<T, FriendDeleteArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friend.
     * @param {FriendUpdateArgs} args - Arguments to update one Friend.
     * @example
     * // Update one Friend
     * const friend = await prisma.friend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendUpdateArgs>(args: SelectSubset<T, FriendUpdateArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friends.
     * @param {FriendDeleteManyArgs} args - Arguments to filter Friends to delete.
     * @example
     * // Delete a few Friends
     * const { count } = await prisma.friend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendDeleteManyArgs>(args?: SelectSubset<T, FriendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friends
     * const friend = await prisma.friend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendUpdateManyArgs>(args: SelectSubset<T, FriendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Friend.
     * @param {FriendUpsertArgs} args - Arguments to update or create a Friend.
     * @example
     * // Update or create a Friend
     * const friend = await prisma.friend.upsert({
     *   create: {
     *     // ... data to create a Friend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friend we want to update
     *   }
     * })
     */
    upsert<T extends FriendUpsertArgs>(args: SelectSubset<T, FriendUpsertArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendCountArgs} args - Arguments to filter Friends to count.
     * @example
     * // Count the number of Friends
     * const count = await prisma.friend.count({
     *   where: {
     *     // ... the filter for the Friends we want to count
     *   }
     * })
    **/
    count<T extends FriendCountArgs>(
      args?: Subset<T, FriendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendAggregateArgs>(args: Subset<T, FriendAggregateArgs>): Prisma.PrismaPromise<GetFriendAggregateType<T>>

    /**
     * Group by Friend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FriendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendGroupByArgs['orderBy'] }
        : { orderBy?: FriendGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FriendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friend model
   */
  readonly fields: FriendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    friend<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Friend model
   */
  interface FriendFieldRefs {
    readonly id: FieldRef<"Friend", 'Int'>
    readonly userId: FieldRef<"Friend", 'Int'>
    readonly friendId: FieldRef<"Friend", 'Int'>
    readonly createdAt: FieldRef<"Friend", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Friend findUnique
   */
  export type FriendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend findUniqueOrThrow
   */
  export type FriendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend findFirst
   */
  export type FriendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Friend findFirstOrThrow
   */
  export type FriendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Friend findMany
   */
  export type FriendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friends to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Friend create
   */
  export type FriendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The data needed to create a Friend.
     */
    data: XOR<FriendCreateInput, FriendUncheckedCreateInput>
  }

  /**
   * Friend createMany
   */
  export type FriendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friends.
     */
    data: FriendCreateManyInput | FriendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Friend update
   */
  export type FriendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The data needed to update a Friend.
     */
    data: XOR<FriendUpdateInput, FriendUncheckedUpdateInput>
    /**
     * Choose, which Friend to update.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend updateMany
   */
  export type FriendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friends.
     */
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyInput>
    /**
     * Filter which Friends to update
     */
    where?: FriendWhereInput
    /**
     * Limit how many Friends to update.
     */
    limit?: number
  }

  /**
   * Friend upsert
   */
  export type FriendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The filter to search for the Friend to update in case it exists.
     */
    where: FriendWhereUniqueInput
    /**
     * In case the Friend found by the `where` argument doesn't exist, create a new Friend with this data.
     */
    create: XOR<FriendCreateInput, FriendUncheckedCreateInput>
    /**
     * In case the Friend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendUpdateInput, FriendUncheckedUpdateInput>
  }

  /**
   * Friend delete
   */
  export type FriendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter which Friend to delete.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend deleteMany
   */
  export type FriendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friends to delete
     */
    where?: FriendWhereInput
    /**
     * Limit how many Friends to delete.
     */
    limit?: number
  }

  /**
   * Friend without action
   */
  export type FriendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
  }


  /**
   * Model DailyWeeklyProgress
   */

  export type AggregateDailyWeeklyProgress = {
    _count: DailyWeeklyProgressCountAggregateOutputType | null
    _avg: DailyWeeklyProgressAvgAggregateOutputType | null
    _sum: DailyWeeklyProgressSumAggregateOutputType | null
    _min: DailyWeeklyProgressMinAggregateOutputType | null
    _max: DailyWeeklyProgressMaxAggregateOutputType | null
  }

  export type DailyWeeklyProgressAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DailyWeeklyProgressSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DailyWeeklyProgressMinAggregateOutputType = {
    id: number | null
    userId: number | null
    date: Date | null
    type: string | null
    createdAt: Date | null
  }

  export type DailyWeeklyProgressMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    date: Date | null
    type: string | null
    createdAt: Date | null
  }

  export type DailyWeeklyProgressCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    type: number
    data: number
    createdAt: number
    _all: number
  }


  export type DailyWeeklyProgressAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DailyWeeklyProgressSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DailyWeeklyProgressMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    type?: true
    createdAt?: true
  }

  export type DailyWeeklyProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    type?: true
    createdAt?: true
  }

  export type DailyWeeklyProgressCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    type?: true
    data?: true
    createdAt?: true
    _all?: true
  }

  export type DailyWeeklyProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyWeeklyProgress to aggregate.
     */
    where?: DailyWeeklyProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyWeeklyProgresses to fetch.
     */
    orderBy?: DailyWeeklyProgressOrderByWithRelationInput | DailyWeeklyProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyWeeklyProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyWeeklyProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyWeeklyProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyWeeklyProgresses
    **/
    _count?: true | DailyWeeklyProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyWeeklyProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyWeeklyProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyWeeklyProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyWeeklyProgressMaxAggregateInputType
  }

  export type GetDailyWeeklyProgressAggregateType<T extends DailyWeeklyProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyWeeklyProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyWeeklyProgress[P]>
      : GetScalarType<T[P], AggregateDailyWeeklyProgress[P]>
  }




  export type DailyWeeklyProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyWeeklyProgressWhereInput
    orderBy?: DailyWeeklyProgressOrderByWithAggregationInput | DailyWeeklyProgressOrderByWithAggregationInput[]
    by: DailyWeeklyProgressScalarFieldEnum[] | DailyWeeklyProgressScalarFieldEnum
    having?: DailyWeeklyProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyWeeklyProgressCountAggregateInputType | true
    _avg?: DailyWeeklyProgressAvgAggregateInputType
    _sum?: DailyWeeklyProgressSumAggregateInputType
    _min?: DailyWeeklyProgressMinAggregateInputType
    _max?: DailyWeeklyProgressMaxAggregateInputType
  }

  export type DailyWeeklyProgressGroupByOutputType = {
    id: number
    userId: number
    date: Date
    type: string
    data: JsonValue
    createdAt: Date
    _count: DailyWeeklyProgressCountAggregateOutputType | null
    _avg: DailyWeeklyProgressAvgAggregateOutputType | null
    _sum: DailyWeeklyProgressSumAggregateOutputType | null
    _min: DailyWeeklyProgressMinAggregateOutputType | null
    _max: DailyWeeklyProgressMaxAggregateOutputType | null
  }

  type GetDailyWeeklyProgressGroupByPayload<T extends DailyWeeklyProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyWeeklyProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyWeeklyProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyWeeklyProgressGroupByOutputType[P]>
            : GetScalarType<T[P], DailyWeeklyProgressGroupByOutputType[P]>
        }
      >
    >


  export type DailyWeeklyProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    type?: boolean
    data?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyWeeklyProgress"]>



  export type DailyWeeklyProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    type?: boolean
    data?: boolean
    createdAt?: boolean
  }

  export type DailyWeeklyProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "type" | "data" | "createdAt", ExtArgs["result"]["dailyWeeklyProgress"]>
  export type DailyWeeklyProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DailyWeeklyProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyWeeklyProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      date: Date
      type: string
      data: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["dailyWeeklyProgress"]>
    composites: {}
  }

  type DailyWeeklyProgressGetPayload<S extends boolean | null | undefined | DailyWeeklyProgressDefaultArgs> = $Result.GetResult<Prisma.$DailyWeeklyProgressPayload, S>

  type DailyWeeklyProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyWeeklyProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyWeeklyProgressCountAggregateInputType | true
    }

  export interface DailyWeeklyProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyWeeklyProgress'], meta: { name: 'DailyWeeklyProgress' } }
    /**
     * Find zero or one DailyWeeklyProgress that matches the filter.
     * @param {DailyWeeklyProgressFindUniqueArgs} args - Arguments to find a DailyWeeklyProgress
     * @example
     * // Get one DailyWeeklyProgress
     * const dailyWeeklyProgress = await prisma.dailyWeeklyProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyWeeklyProgressFindUniqueArgs>(args: SelectSubset<T, DailyWeeklyProgressFindUniqueArgs<ExtArgs>>): Prisma__DailyWeeklyProgressClient<$Result.GetResult<Prisma.$DailyWeeklyProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyWeeklyProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyWeeklyProgressFindUniqueOrThrowArgs} args - Arguments to find a DailyWeeklyProgress
     * @example
     * // Get one DailyWeeklyProgress
     * const dailyWeeklyProgress = await prisma.dailyWeeklyProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyWeeklyProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyWeeklyProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyWeeklyProgressClient<$Result.GetResult<Prisma.$DailyWeeklyProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyWeeklyProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyWeeklyProgressFindFirstArgs} args - Arguments to find a DailyWeeklyProgress
     * @example
     * // Get one DailyWeeklyProgress
     * const dailyWeeklyProgress = await prisma.dailyWeeklyProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyWeeklyProgressFindFirstArgs>(args?: SelectSubset<T, DailyWeeklyProgressFindFirstArgs<ExtArgs>>): Prisma__DailyWeeklyProgressClient<$Result.GetResult<Prisma.$DailyWeeklyProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyWeeklyProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyWeeklyProgressFindFirstOrThrowArgs} args - Arguments to find a DailyWeeklyProgress
     * @example
     * // Get one DailyWeeklyProgress
     * const dailyWeeklyProgress = await prisma.dailyWeeklyProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyWeeklyProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyWeeklyProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyWeeklyProgressClient<$Result.GetResult<Prisma.$DailyWeeklyProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyWeeklyProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyWeeklyProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyWeeklyProgresses
     * const dailyWeeklyProgresses = await prisma.dailyWeeklyProgress.findMany()
     * 
     * // Get first 10 DailyWeeklyProgresses
     * const dailyWeeklyProgresses = await prisma.dailyWeeklyProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyWeeklyProgressWithIdOnly = await prisma.dailyWeeklyProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyWeeklyProgressFindManyArgs>(args?: SelectSubset<T, DailyWeeklyProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyWeeklyProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyWeeklyProgress.
     * @param {DailyWeeklyProgressCreateArgs} args - Arguments to create a DailyWeeklyProgress.
     * @example
     * // Create one DailyWeeklyProgress
     * const DailyWeeklyProgress = await prisma.dailyWeeklyProgress.create({
     *   data: {
     *     // ... data to create a DailyWeeklyProgress
     *   }
     * })
     * 
     */
    create<T extends DailyWeeklyProgressCreateArgs>(args: SelectSubset<T, DailyWeeklyProgressCreateArgs<ExtArgs>>): Prisma__DailyWeeklyProgressClient<$Result.GetResult<Prisma.$DailyWeeklyProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyWeeklyProgresses.
     * @param {DailyWeeklyProgressCreateManyArgs} args - Arguments to create many DailyWeeklyProgresses.
     * @example
     * // Create many DailyWeeklyProgresses
     * const dailyWeeklyProgress = await prisma.dailyWeeklyProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyWeeklyProgressCreateManyArgs>(args?: SelectSubset<T, DailyWeeklyProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DailyWeeklyProgress.
     * @param {DailyWeeklyProgressDeleteArgs} args - Arguments to delete one DailyWeeklyProgress.
     * @example
     * // Delete one DailyWeeklyProgress
     * const DailyWeeklyProgress = await prisma.dailyWeeklyProgress.delete({
     *   where: {
     *     // ... filter to delete one DailyWeeklyProgress
     *   }
     * })
     * 
     */
    delete<T extends DailyWeeklyProgressDeleteArgs>(args: SelectSubset<T, DailyWeeklyProgressDeleteArgs<ExtArgs>>): Prisma__DailyWeeklyProgressClient<$Result.GetResult<Prisma.$DailyWeeklyProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyWeeklyProgress.
     * @param {DailyWeeklyProgressUpdateArgs} args - Arguments to update one DailyWeeklyProgress.
     * @example
     * // Update one DailyWeeklyProgress
     * const dailyWeeklyProgress = await prisma.dailyWeeklyProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyWeeklyProgressUpdateArgs>(args: SelectSubset<T, DailyWeeklyProgressUpdateArgs<ExtArgs>>): Prisma__DailyWeeklyProgressClient<$Result.GetResult<Prisma.$DailyWeeklyProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyWeeklyProgresses.
     * @param {DailyWeeklyProgressDeleteManyArgs} args - Arguments to filter DailyWeeklyProgresses to delete.
     * @example
     * // Delete a few DailyWeeklyProgresses
     * const { count } = await prisma.dailyWeeklyProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyWeeklyProgressDeleteManyArgs>(args?: SelectSubset<T, DailyWeeklyProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyWeeklyProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyWeeklyProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyWeeklyProgresses
     * const dailyWeeklyProgress = await prisma.dailyWeeklyProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyWeeklyProgressUpdateManyArgs>(args: SelectSubset<T, DailyWeeklyProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyWeeklyProgress.
     * @param {DailyWeeklyProgressUpsertArgs} args - Arguments to update or create a DailyWeeklyProgress.
     * @example
     * // Update or create a DailyWeeklyProgress
     * const dailyWeeklyProgress = await prisma.dailyWeeklyProgress.upsert({
     *   create: {
     *     // ... data to create a DailyWeeklyProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyWeeklyProgress we want to update
     *   }
     * })
     */
    upsert<T extends DailyWeeklyProgressUpsertArgs>(args: SelectSubset<T, DailyWeeklyProgressUpsertArgs<ExtArgs>>): Prisma__DailyWeeklyProgressClient<$Result.GetResult<Prisma.$DailyWeeklyProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyWeeklyProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyWeeklyProgressCountArgs} args - Arguments to filter DailyWeeklyProgresses to count.
     * @example
     * // Count the number of DailyWeeklyProgresses
     * const count = await prisma.dailyWeeklyProgress.count({
     *   where: {
     *     // ... the filter for the DailyWeeklyProgresses we want to count
     *   }
     * })
    **/
    count<T extends DailyWeeklyProgressCountArgs>(
      args?: Subset<T, DailyWeeklyProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyWeeklyProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyWeeklyProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyWeeklyProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyWeeklyProgressAggregateArgs>(args: Subset<T, DailyWeeklyProgressAggregateArgs>): Prisma.PrismaPromise<GetDailyWeeklyProgressAggregateType<T>>

    /**
     * Group by DailyWeeklyProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyWeeklyProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyWeeklyProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyWeeklyProgressGroupByArgs['orderBy'] }
        : { orderBy?: DailyWeeklyProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyWeeklyProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyWeeklyProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyWeeklyProgress model
   */
  readonly fields: DailyWeeklyProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyWeeklyProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyWeeklyProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyWeeklyProgress model
   */
  interface DailyWeeklyProgressFieldRefs {
    readonly id: FieldRef<"DailyWeeklyProgress", 'Int'>
    readonly userId: FieldRef<"DailyWeeklyProgress", 'Int'>
    readonly date: FieldRef<"DailyWeeklyProgress", 'DateTime'>
    readonly type: FieldRef<"DailyWeeklyProgress", 'String'>
    readonly data: FieldRef<"DailyWeeklyProgress", 'Json'>
    readonly createdAt: FieldRef<"DailyWeeklyProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyWeeklyProgress findUnique
   */
  export type DailyWeeklyProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyWeeklyProgress
     */
    select?: DailyWeeklyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyWeeklyProgress
     */
    omit?: DailyWeeklyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyWeeklyProgressInclude<ExtArgs> | null
    /**
     * Filter, which DailyWeeklyProgress to fetch.
     */
    where: DailyWeeklyProgressWhereUniqueInput
  }

  /**
   * DailyWeeklyProgress findUniqueOrThrow
   */
  export type DailyWeeklyProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyWeeklyProgress
     */
    select?: DailyWeeklyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyWeeklyProgress
     */
    omit?: DailyWeeklyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyWeeklyProgressInclude<ExtArgs> | null
    /**
     * Filter, which DailyWeeklyProgress to fetch.
     */
    where: DailyWeeklyProgressWhereUniqueInput
  }

  /**
   * DailyWeeklyProgress findFirst
   */
  export type DailyWeeklyProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyWeeklyProgress
     */
    select?: DailyWeeklyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyWeeklyProgress
     */
    omit?: DailyWeeklyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyWeeklyProgressInclude<ExtArgs> | null
    /**
     * Filter, which DailyWeeklyProgress to fetch.
     */
    where?: DailyWeeklyProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyWeeklyProgresses to fetch.
     */
    orderBy?: DailyWeeklyProgressOrderByWithRelationInput | DailyWeeklyProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyWeeklyProgresses.
     */
    cursor?: DailyWeeklyProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyWeeklyProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyWeeklyProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyWeeklyProgresses.
     */
    distinct?: DailyWeeklyProgressScalarFieldEnum | DailyWeeklyProgressScalarFieldEnum[]
  }

  /**
   * DailyWeeklyProgress findFirstOrThrow
   */
  export type DailyWeeklyProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyWeeklyProgress
     */
    select?: DailyWeeklyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyWeeklyProgress
     */
    omit?: DailyWeeklyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyWeeklyProgressInclude<ExtArgs> | null
    /**
     * Filter, which DailyWeeklyProgress to fetch.
     */
    where?: DailyWeeklyProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyWeeklyProgresses to fetch.
     */
    orderBy?: DailyWeeklyProgressOrderByWithRelationInput | DailyWeeklyProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyWeeklyProgresses.
     */
    cursor?: DailyWeeklyProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyWeeklyProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyWeeklyProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyWeeklyProgresses.
     */
    distinct?: DailyWeeklyProgressScalarFieldEnum | DailyWeeklyProgressScalarFieldEnum[]
  }

  /**
   * DailyWeeklyProgress findMany
   */
  export type DailyWeeklyProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyWeeklyProgress
     */
    select?: DailyWeeklyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyWeeklyProgress
     */
    omit?: DailyWeeklyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyWeeklyProgressInclude<ExtArgs> | null
    /**
     * Filter, which DailyWeeklyProgresses to fetch.
     */
    where?: DailyWeeklyProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyWeeklyProgresses to fetch.
     */
    orderBy?: DailyWeeklyProgressOrderByWithRelationInput | DailyWeeklyProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyWeeklyProgresses.
     */
    cursor?: DailyWeeklyProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyWeeklyProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyWeeklyProgresses.
     */
    skip?: number
    distinct?: DailyWeeklyProgressScalarFieldEnum | DailyWeeklyProgressScalarFieldEnum[]
  }

  /**
   * DailyWeeklyProgress create
   */
  export type DailyWeeklyProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyWeeklyProgress
     */
    select?: DailyWeeklyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyWeeklyProgress
     */
    omit?: DailyWeeklyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyWeeklyProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyWeeklyProgress.
     */
    data: XOR<DailyWeeklyProgressCreateInput, DailyWeeklyProgressUncheckedCreateInput>
  }

  /**
   * DailyWeeklyProgress createMany
   */
  export type DailyWeeklyProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyWeeklyProgresses.
     */
    data: DailyWeeklyProgressCreateManyInput | DailyWeeklyProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyWeeklyProgress update
   */
  export type DailyWeeklyProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyWeeklyProgress
     */
    select?: DailyWeeklyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyWeeklyProgress
     */
    omit?: DailyWeeklyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyWeeklyProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyWeeklyProgress.
     */
    data: XOR<DailyWeeklyProgressUpdateInput, DailyWeeklyProgressUncheckedUpdateInput>
    /**
     * Choose, which DailyWeeklyProgress to update.
     */
    where: DailyWeeklyProgressWhereUniqueInput
  }

  /**
   * DailyWeeklyProgress updateMany
   */
  export type DailyWeeklyProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyWeeklyProgresses.
     */
    data: XOR<DailyWeeklyProgressUpdateManyMutationInput, DailyWeeklyProgressUncheckedUpdateManyInput>
    /**
     * Filter which DailyWeeklyProgresses to update
     */
    where?: DailyWeeklyProgressWhereInput
    /**
     * Limit how many DailyWeeklyProgresses to update.
     */
    limit?: number
  }

  /**
   * DailyWeeklyProgress upsert
   */
  export type DailyWeeklyProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyWeeklyProgress
     */
    select?: DailyWeeklyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyWeeklyProgress
     */
    omit?: DailyWeeklyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyWeeklyProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyWeeklyProgress to update in case it exists.
     */
    where: DailyWeeklyProgressWhereUniqueInput
    /**
     * In case the DailyWeeklyProgress found by the `where` argument doesn't exist, create a new DailyWeeklyProgress with this data.
     */
    create: XOR<DailyWeeklyProgressCreateInput, DailyWeeklyProgressUncheckedCreateInput>
    /**
     * In case the DailyWeeklyProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyWeeklyProgressUpdateInput, DailyWeeklyProgressUncheckedUpdateInput>
  }

  /**
   * DailyWeeklyProgress delete
   */
  export type DailyWeeklyProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyWeeklyProgress
     */
    select?: DailyWeeklyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyWeeklyProgress
     */
    omit?: DailyWeeklyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyWeeklyProgressInclude<ExtArgs> | null
    /**
     * Filter which DailyWeeklyProgress to delete.
     */
    where: DailyWeeklyProgressWhereUniqueInput
  }

  /**
   * DailyWeeklyProgress deleteMany
   */
  export type DailyWeeklyProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyWeeklyProgresses to delete
     */
    where?: DailyWeeklyProgressWhereInput
    /**
     * Limit how many DailyWeeklyProgresses to delete.
     */
    limit?: number
  }

  /**
   * DailyWeeklyProgress without action
   */
  export type DailyWeeklyProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyWeeklyProgress
     */
    select?: DailyWeeklyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyWeeklyProgress
     */
    omit?: DailyWeeklyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyWeeklyProgressInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    nickname: 'nickname',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SurveyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    age: 'age',
    gender: 'gender',
    answers: 'answers',
    createdAt: 'createdAt'
  };

  export type SurveyScalarFieldEnum = (typeof SurveyScalarFieldEnum)[keyof typeof SurveyScalarFieldEnum]


  export const MissionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    type: 'type',
    verificationType: 'verificationType',
    verificationData: 'verificationData',
    createdAt: 'createdAt'
  };

  export type MissionScalarFieldEnum = (typeof MissionScalarFieldEnum)[keyof typeof MissionScalarFieldEnum]


  export const MissionCompletionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    missionId: 'missionId',
    completedAt: 'completedAt',
    verificationData: 'verificationData',
    status: 'status',
    feedback: 'feedback'
  };

  export type MissionCompletionScalarFieldEnum = (typeof MissionCompletionScalarFieldEnum)[keyof typeof MissionCompletionScalarFieldEnum]


  export const MissionVerificationScalarFieldEnum: {
    id: 'id',
    missionCompletionId: 'missionCompletionId',
    type: 'type',
    data: 'data',
    createdAt: 'createdAt'
  };

  export type MissionVerificationScalarFieldEnum = (typeof MissionVerificationScalarFieldEnum)[keyof typeof MissionVerificationScalarFieldEnum]


  export const BadgeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt'
  };

  export type BadgeScalarFieldEnum = (typeof BadgeScalarFieldEnum)[keyof typeof BadgeScalarFieldEnum]


  export const FriendScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    friendId: 'friendId',
    createdAt: 'createdAt'
  };

  export type FriendScalarFieldEnum = (typeof FriendScalarFieldEnum)[keyof typeof FriendScalarFieldEnum]


  export const DailyWeeklyProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    type: 'type',
    data: 'data',
    createdAt: 'createdAt'
  };

  export type DailyWeeklyProgressScalarFieldEnum = (typeof DailyWeeklyProgressScalarFieldEnum)[keyof typeof DailyWeeklyProgressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    nickname: 'nickname'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SurveyOrderByRelevanceFieldEnum: {
    gender: 'gender'
  };

  export type SurveyOrderByRelevanceFieldEnum = (typeof SurveyOrderByRelevanceFieldEnum)[keyof typeof SurveyOrderByRelevanceFieldEnum]


  export const MissionOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    verificationType: 'verificationType'
  };

  export type MissionOrderByRelevanceFieldEnum = (typeof MissionOrderByRelevanceFieldEnum)[keyof typeof MissionOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const MissionCompletionOrderByRelevanceFieldEnum: {
    feedback: 'feedback'
  };

  export type MissionCompletionOrderByRelevanceFieldEnum = (typeof MissionCompletionOrderByRelevanceFieldEnum)[keyof typeof MissionCompletionOrderByRelevanceFieldEnum]


  export const MissionVerificationOrderByRelevanceFieldEnum: {
    type: 'type'
  };

  export type MissionVerificationOrderByRelevanceFieldEnum = (typeof MissionVerificationOrderByRelevanceFieldEnum)[keyof typeof MissionVerificationOrderByRelevanceFieldEnum]


  export const BadgeOrderByRelevanceFieldEnum: {
    name: 'name',
    imageUrl: 'imageUrl'
  };

  export type BadgeOrderByRelevanceFieldEnum = (typeof BadgeOrderByRelevanceFieldEnum)[keyof typeof BadgeOrderByRelevanceFieldEnum]


  export const DailyWeeklyProgressOrderByRelevanceFieldEnum: {
    type: 'type'
  };

  export type DailyWeeklyProgressOrderByRelevanceFieldEnum = (typeof DailyWeeklyProgressOrderByRelevanceFieldEnum)[keyof typeof DailyWeeklyProgressOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'MissionType'
   */
  export type EnumMissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MissionType'>
    


  /**
   * Reference to a field of type 'MissionStatus'
   */
  export type EnumMissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MissionStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    nickname?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    badges?: BadgeListRelationFilter
    dailyProgress?: DailyWeeklyProgressListRelationFilter
    friendOf?: FriendListRelationFilter
    friends?: FriendListRelationFilter
    missions?: MissionCompletionListRelationFilter
    surveys?: SurveyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    badges?: BadgeOrderByRelationAggregateInput
    dailyProgress?: DailyWeeklyProgressOrderByRelationAggregateInput
    friendOf?: FriendOrderByRelationAggregateInput
    friends?: FriendOrderByRelationAggregateInput
    missions?: MissionCompletionOrderByRelationAggregateInput
    surveys?: SurveyOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    nickname?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    badges?: BadgeListRelationFilter
    dailyProgress?: DailyWeeklyProgressListRelationFilter
    friendOf?: FriendListRelationFilter
    friends?: FriendListRelationFilter
    missions?: MissionCompletionListRelationFilter
    surveys?: SurveyListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    nickname?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SurveyWhereInput = {
    AND?: SurveyWhereInput | SurveyWhereInput[]
    OR?: SurveyWhereInput[]
    NOT?: SurveyWhereInput | SurveyWhereInput[]
    id?: IntFilter<"Survey"> | number
    userId?: IntFilter<"Survey"> | number
    age?: IntFilter<"Survey"> | number
    gender?: StringFilter<"Survey"> | string
    answers?: JsonFilter<"Survey">
    createdAt?: DateTimeFilter<"Survey"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SurveyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: SurveyOrderByRelevanceInput
  }

  export type SurveyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SurveyWhereInput | SurveyWhereInput[]
    OR?: SurveyWhereInput[]
    NOT?: SurveyWhereInput | SurveyWhereInput[]
    userId?: IntFilter<"Survey"> | number
    age?: IntFilter<"Survey"> | number
    gender?: StringFilter<"Survey"> | string
    answers?: JsonFilter<"Survey">
    createdAt?: DateTimeFilter<"Survey"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SurveyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    _count?: SurveyCountOrderByAggregateInput
    _avg?: SurveyAvgOrderByAggregateInput
    _max?: SurveyMaxOrderByAggregateInput
    _min?: SurveyMinOrderByAggregateInput
    _sum?: SurveySumOrderByAggregateInput
  }

  export type SurveyScalarWhereWithAggregatesInput = {
    AND?: SurveyScalarWhereWithAggregatesInput | SurveyScalarWhereWithAggregatesInput[]
    OR?: SurveyScalarWhereWithAggregatesInput[]
    NOT?: SurveyScalarWhereWithAggregatesInput | SurveyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Survey"> | number
    userId?: IntWithAggregatesFilter<"Survey"> | number
    age?: IntWithAggregatesFilter<"Survey"> | number
    gender?: StringWithAggregatesFilter<"Survey"> | string
    answers?: JsonWithAggregatesFilter<"Survey">
    createdAt?: DateTimeWithAggregatesFilter<"Survey"> | Date | string
  }

  export type MissionWhereInput = {
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    id?: IntFilter<"Mission"> | number
    title?: StringFilter<"Mission"> | string
    description?: StringFilter<"Mission"> | string
    type?: EnumMissionTypeFilter<"Mission"> | $Enums.MissionType
    verificationType?: StringFilter<"Mission"> | string
    verificationData?: JsonFilter<"Mission">
    createdAt?: DateTimeFilter<"Mission"> | Date | string
    completions?: MissionCompletionListRelationFilter
  }

  export type MissionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    verificationType?: SortOrder
    verificationData?: SortOrder
    createdAt?: SortOrder
    completions?: MissionCompletionOrderByRelationAggregateInput
    _relevance?: MissionOrderByRelevanceInput
  }

  export type MissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    title?: StringFilter<"Mission"> | string
    description?: StringFilter<"Mission"> | string
    type?: EnumMissionTypeFilter<"Mission"> | $Enums.MissionType
    verificationType?: StringFilter<"Mission"> | string
    verificationData?: JsonFilter<"Mission">
    createdAt?: DateTimeFilter<"Mission"> | Date | string
    completions?: MissionCompletionListRelationFilter
  }, "id">

  export type MissionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    verificationType?: SortOrder
    verificationData?: SortOrder
    createdAt?: SortOrder
    _count?: MissionCountOrderByAggregateInput
    _avg?: MissionAvgOrderByAggregateInput
    _max?: MissionMaxOrderByAggregateInput
    _min?: MissionMinOrderByAggregateInput
    _sum?: MissionSumOrderByAggregateInput
  }

  export type MissionScalarWhereWithAggregatesInput = {
    AND?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    OR?: MissionScalarWhereWithAggregatesInput[]
    NOT?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mission"> | number
    title?: StringWithAggregatesFilter<"Mission"> | string
    description?: StringWithAggregatesFilter<"Mission"> | string
    type?: EnumMissionTypeWithAggregatesFilter<"Mission"> | $Enums.MissionType
    verificationType?: StringWithAggregatesFilter<"Mission"> | string
    verificationData?: JsonWithAggregatesFilter<"Mission">
    createdAt?: DateTimeWithAggregatesFilter<"Mission"> | Date | string
  }

  export type MissionCompletionWhereInput = {
    AND?: MissionCompletionWhereInput | MissionCompletionWhereInput[]
    OR?: MissionCompletionWhereInput[]
    NOT?: MissionCompletionWhereInput | MissionCompletionWhereInput[]
    id?: IntFilter<"MissionCompletion"> | number
    userId?: IntFilter<"MissionCompletion"> | number
    missionId?: IntFilter<"MissionCompletion"> | number
    completedAt?: DateTimeFilter<"MissionCompletion"> | Date | string
    verificationData?: JsonFilter<"MissionCompletion">
    status?: EnumMissionStatusFilter<"MissionCompletion"> | $Enums.MissionStatus
    feedback?: StringNullableFilter<"MissionCompletion"> | string | null
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    verifications?: MissionVerificationListRelationFilter
  }

  export type MissionCompletionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
    completedAt?: SortOrder
    verificationData?: SortOrder
    status?: SortOrder
    feedback?: SortOrderInput | SortOrder
    mission?: MissionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    verifications?: MissionVerificationOrderByRelationAggregateInput
    _relevance?: MissionCompletionOrderByRelevanceInput
  }

  export type MissionCompletionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MissionCompletionWhereInput | MissionCompletionWhereInput[]
    OR?: MissionCompletionWhereInput[]
    NOT?: MissionCompletionWhereInput | MissionCompletionWhereInput[]
    userId?: IntFilter<"MissionCompletion"> | number
    missionId?: IntFilter<"MissionCompletion"> | number
    completedAt?: DateTimeFilter<"MissionCompletion"> | Date | string
    verificationData?: JsonFilter<"MissionCompletion">
    status?: EnumMissionStatusFilter<"MissionCompletion"> | $Enums.MissionStatus
    feedback?: StringNullableFilter<"MissionCompletion"> | string | null
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    verifications?: MissionVerificationListRelationFilter
  }, "id">

  export type MissionCompletionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
    completedAt?: SortOrder
    verificationData?: SortOrder
    status?: SortOrder
    feedback?: SortOrderInput | SortOrder
    _count?: MissionCompletionCountOrderByAggregateInput
    _avg?: MissionCompletionAvgOrderByAggregateInput
    _max?: MissionCompletionMaxOrderByAggregateInput
    _min?: MissionCompletionMinOrderByAggregateInput
    _sum?: MissionCompletionSumOrderByAggregateInput
  }

  export type MissionCompletionScalarWhereWithAggregatesInput = {
    AND?: MissionCompletionScalarWhereWithAggregatesInput | MissionCompletionScalarWhereWithAggregatesInput[]
    OR?: MissionCompletionScalarWhereWithAggregatesInput[]
    NOT?: MissionCompletionScalarWhereWithAggregatesInput | MissionCompletionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MissionCompletion"> | number
    userId?: IntWithAggregatesFilter<"MissionCompletion"> | number
    missionId?: IntWithAggregatesFilter<"MissionCompletion"> | number
    completedAt?: DateTimeWithAggregatesFilter<"MissionCompletion"> | Date | string
    verificationData?: JsonWithAggregatesFilter<"MissionCompletion">
    status?: EnumMissionStatusWithAggregatesFilter<"MissionCompletion"> | $Enums.MissionStatus
    feedback?: StringNullableWithAggregatesFilter<"MissionCompletion"> | string | null
  }

  export type MissionVerificationWhereInput = {
    AND?: MissionVerificationWhereInput | MissionVerificationWhereInput[]
    OR?: MissionVerificationWhereInput[]
    NOT?: MissionVerificationWhereInput | MissionVerificationWhereInput[]
    id?: IntFilter<"MissionVerification"> | number
    missionCompletionId?: IntFilter<"MissionVerification"> | number
    type?: StringFilter<"MissionVerification"> | string
    data?: JsonFilter<"MissionVerification">
    createdAt?: DateTimeFilter<"MissionVerification"> | Date | string
    missionCompletion?: XOR<MissionCompletionScalarRelationFilter, MissionCompletionWhereInput>
  }

  export type MissionVerificationOrderByWithRelationInput = {
    id?: SortOrder
    missionCompletionId?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    missionCompletion?: MissionCompletionOrderByWithRelationInput
    _relevance?: MissionVerificationOrderByRelevanceInput
  }

  export type MissionVerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MissionVerificationWhereInput | MissionVerificationWhereInput[]
    OR?: MissionVerificationWhereInput[]
    NOT?: MissionVerificationWhereInput | MissionVerificationWhereInput[]
    missionCompletionId?: IntFilter<"MissionVerification"> | number
    type?: StringFilter<"MissionVerification"> | string
    data?: JsonFilter<"MissionVerification">
    createdAt?: DateTimeFilter<"MissionVerification"> | Date | string
    missionCompletion?: XOR<MissionCompletionScalarRelationFilter, MissionCompletionWhereInput>
  }, "id">

  export type MissionVerificationOrderByWithAggregationInput = {
    id?: SortOrder
    missionCompletionId?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    _count?: MissionVerificationCountOrderByAggregateInput
    _avg?: MissionVerificationAvgOrderByAggregateInput
    _max?: MissionVerificationMaxOrderByAggregateInput
    _min?: MissionVerificationMinOrderByAggregateInput
    _sum?: MissionVerificationSumOrderByAggregateInput
  }

  export type MissionVerificationScalarWhereWithAggregatesInput = {
    AND?: MissionVerificationScalarWhereWithAggregatesInput | MissionVerificationScalarWhereWithAggregatesInput[]
    OR?: MissionVerificationScalarWhereWithAggregatesInput[]
    NOT?: MissionVerificationScalarWhereWithAggregatesInput | MissionVerificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MissionVerification"> | number
    missionCompletionId?: IntWithAggregatesFilter<"MissionVerification"> | number
    type?: StringWithAggregatesFilter<"MissionVerification"> | string
    data?: JsonWithAggregatesFilter<"MissionVerification">
    createdAt?: DateTimeWithAggregatesFilter<"MissionVerification"> | Date | string
  }

  export type BadgeWhereInput = {
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    id?: IntFilter<"Badge"> | number
    userId?: IntFilter<"Badge"> | number
    name?: StringFilter<"Badge"> | string
    imageUrl?: StringNullableFilter<"Badge"> | string | null
    createdAt?: DateTimeFilter<"Badge"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BadgeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: BadgeOrderByRelevanceInput
  }

  export type BadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    userId?: IntFilter<"Badge"> | number
    name?: StringFilter<"Badge"> | string
    imageUrl?: StringNullableFilter<"Badge"> | string | null
    createdAt?: DateTimeFilter<"Badge"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BadgeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BadgeCountOrderByAggregateInput
    _avg?: BadgeAvgOrderByAggregateInput
    _max?: BadgeMaxOrderByAggregateInput
    _min?: BadgeMinOrderByAggregateInput
    _sum?: BadgeSumOrderByAggregateInput
  }

  export type BadgeScalarWhereWithAggregatesInput = {
    AND?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    OR?: BadgeScalarWhereWithAggregatesInput[]
    NOT?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Badge"> | number
    userId?: IntWithAggregatesFilter<"Badge"> | number
    name?: StringWithAggregatesFilter<"Badge"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Badge"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Badge"> | Date | string
  }

  export type FriendWhereInput = {
    AND?: FriendWhereInput | FriendWhereInput[]
    OR?: FriendWhereInput[]
    NOT?: FriendWhereInput | FriendWhereInput[]
    id?: IntFilter<"Friend"> | number
    userId?: IntFilter<"Friend"> | number
    friendId?: IntFilter<"Friend"> | number
    createdAt?: DateTimeFilter<"Friend"> | Date | string
    friend?: XOR<UserScalarRelationFilter, UserWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FriendOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
    friend?: UserOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type FriendWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FriendWhereInput | FriendWhereInput[]
    OR?: FriendWhereInput[]
    NOT?: FriendWhereInput | FriendWhereInput[]
    userId?: IntFilter<"Friend"> | number
    friendId?: IntFilter<"Friend"> | number
    createdAt?: DateTimeFilter<"Friend"> | Date | string
    friend?: XOR<UserScalarRelationFilter, UserWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FriendOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
    _count?: FriendCountOrderByAggregateInput
    _avg?: FriendAvgOrderByAggregateInput
    _max?: FriendMaxOrderByAggregateInput
    _min?: FriendMinOrderByAggregateInput
    _sum?: FriendSumOrderByAggregateInput
  }

  export type FriendScalarWhereWithAggregatesInput = {
    AND?: FriendScalarWhereWithAggregatesInput | FriendScalarWhereWithAggregatesInput[]
    OR?: FriendScalarWhereWithAggregatesInput[]
    NOT?: FriendScalarWhereWithAggregatesInput | FriendScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Friend"> | number
    userId?: IntWithAggregatesFilter<"Friend"> | number
    friendId?: IntWithAggregatesFilter<"Friend"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Friend"> | Date | string
  }

  export type DailyWeeklyProgressWhereInput = {
    AND?: DailyWeeklyProgressWhereInput | DailyWeeklyProgressWhereInput[]
    OR?: DailyWeeklyProgressWhereInput[]
    NOT?: DailyWeeklyProgressWhereInput | DailyWeeklyProgressWhereInput[]
    id?: IntFilter<"DailyWeeklyProgress"> | number
    userId?: IntFilter<"DailyWeeklyProgress"> | number
    date?: DateTimeFilter<"DailyWeeklyProgress"> | Date | string
    type?: StringFilter<"DailyWeeklyProgress"> | string
    data?: JsonFilter<"DailyWeeklyProgress">
    createdAt?: DateTimeFilter<"DailyWeeklyProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DailyWeeklyProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: DailyWeeklyProgressOrderByRelevanceInput
  }

  export type DailyWeeklyProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DailyWeeklyProgressWhereInput | DailyWeeklyProgressWhereInput[]
    OR?: DailyWeeklyProgressWhereInput[]
    NOT?: DailyWeeklyProgressWhereInput | DailyWeeklyProgressWhereInput[]
    userId?: IntFilter<"DailyWeeklyProgress"> | number
    date?: DateTimeFilter<"DailyWeeklyProgress"> | Date | string
    type?: StringFilter<"DailyWeeklyProgress"> | string
    data?: JsonFilter<"DailyWeeklyProgress">
    createdAt?: DateTimeFilter<"DailyWeeklyProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DailyWeeklyProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    _count?: DailyWeeklyProgressCountOrderByAggregateInput
    _avg?: DailyWeeklyProgressAvgOrderByAggregateInput
    _max?: DailyWeeklyProgressMaxOrderByAggregateInput
    _min?: DailyWeeklyProgressMinOrderByAggregateInput
    _sum?: DailyWeeklyProgressSumOrderByAggregateInput
  }

  export type DailyWeeklyProgressScalarWhereWithAggregatesInput = {
    AND?: DailyWeeklyProgressScalarWhereWithAggregatesInput | DailyWeeklyProgressScalarWhereWithAggregatesInput[]
    OR?: DailyWeeklyProgressScalarWhereWithAggregatesInput[]
    NOT?: DailyWeeklyProgressScalarWhereWithAggregatesInput | DailyWeeklyProgressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailyWeeklyProgress"> | number
    userId?: IntWithAggregatesFilter<"DailyWeeklyProgress"> | number
    date?: DateTimeWithAggregatesFilter<"DailyWeeklyProgress"> | Date | string
    type?: StringWithAggregatesFilter<"DailyWeeklyProgress"> | string
    data?: JsonWithAggregatesFilter<"DailyWeeklyProgress">
    createdAt?: DateTimeWithAggregatesFilter<"DailyWeeklyProgress"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    nickname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: BadgeCreateNestedManyWithoutUserInput
    dailyProgress?: DailyWeeklyProgressCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    friends?: FriendCreateNestedManyWithoutUserInput
    missions?: MissionCompletionCreateNestedManyWithoutUserInput
    surveys?: SurveyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    nickname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: BadgeUncheckedCreateNestedManyWithoutUserInput
    dailyProgress?: DailyWeeklyProgressUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    missions?: MissionCompletionUncheckedCreateNestedManyWithoutUserInput
    surveys?: SurveyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: BadgeUpdateManyWithoutUserNestedInput
    dailyProgress?: DailyWeeklyProgressUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    friends?: FriendUpdateManyWithoutUserNestedInput
    missions?: MissionCompletionUpdateManyWithoutUserNestedInput
    surveys?: SurveyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: BadgeUncheckedUpdateManyWithoutUserNestedInput
    dailyProgress?: DailyWeeklyProgressUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    missions?: MissionCompletionUncheckedUpdateManyWithoutUserNestedInput
    surveys?: SurveyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    nickname: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyCreateInput = {
    age: number
    gender: string
    answers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSurveysInput
  }

  export type SurveyUncheckedCreateInput = {
    id?: number
    userId: number
    age: number
    gender: string
    answers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SurveyUpdateInput = {
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    answers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSurveysNestedInput
  }

  export type SurveyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    answers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyCreateManyInput = {
    id?: number
    userId: number
    age: number
    gender: string
    answers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SurveyUpdateManyMutationInput = {
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    answers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    answers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionCreateInput = {
    title: string
    description: string
    type: $Enums.MissionType
    verificationType: string
    verificationData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    completions?: MissionCompletionCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    type: $Enums.MissionType
    verificationType: string
    verificationData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    completions?: MissionCompletionUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    verificationType?: StringFieldUpdateOperationsInput | string
    verificationData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completions?: MissionCompletionUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    verificationType?: StringFieldUpdateOperationsInput | string
    verificationData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completions?: MissionCompletionUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type MissionCreateManyInput = {
    id?: number
    title: string
    description: string
    type: $Enums.MissionType
    verificationType: string
    verificationData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MissionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    verificationType?: StringFieldUpdateOperationsInput | string
    verificationData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    verificationType?: StringFieldUpdateOperationsInput | string
    verificationData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionCompletionCreateInput = {
    completedAt?: Date | string
    verificationData: JsonNullValueInput | InputJsonValue
    status: $Enums.MissionStatus
    feedback?: string | null
    mission: MissionCreateNestedOneWithoutCompletionsInput
    user: UserCreateNestedOneWithoutMissionsInput
    verifications?: MissionVerificationCreateNestedManyWithoutMissionCompletionInput
  }

  export type MissionCompletionUncheckedCreateInput = {
    id?: number
    userId: number
    missionId: number
    completedAt?: Date | string
    verificationData: JsonNullValueInput | InputJsonValue
    status: $Enums.MissionStatus
    feedback?: string | null
    verifications?: MissionVerificationUncheckedCreateNestedManyWithoutMissionCompletionInput
  }

  export type MissionCompletionUpdateInput = {
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationData?: JsonNullValueInput | InputJsonValue
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    mission?: MissionUpdateOneRequiredWithoutCompletionsNestedInput
    user?: UserUpdateOneRequiredWithoutMissionsNestedInput
    verifications?: MissionVerificationUpdateManyWithoutMissionCompletionNestedInput
  }

  export type MissionCompletionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    missionId?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationData?: JsonNullValueInput | InputJsonValue
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    verifications?: MissionVerificationUncheckedUpdateManyWithoutMissionCompletionNestedInput
  }

  export type MissionCompletionCreateManyInput = {
    id?: number
    userId: number
    missionId: number
    completedAt?: Date | string
    verificationData: JsonNullValueInput | InputJsonValue
    status: $Enums.MissionStatus
    feedback?: string | null
  }

  export type MissionCompletionUpdateManyMutationInput = {
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationData?: JsonNullValueInput | InputJsonValue
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MissionCompletionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    missionId?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationData?: JsonNullValueInput | InputJsonValue
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MissionVerificationCreateInput = {
    type: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    missionCompletion: MissionCompletionCreateNestedOneWithoutVerificationsInput
  }

  export type MissionVerificationUncheckedCreateInput = {
    id?: number
    missionCompletionId: number
    type: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MissionVerificationUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    missionCompletion?: MissionCompletionUpdateOneRequiredWithoutVerificationsNestedInput
  }

  export type MissionVerificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    missionCompletionId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionVerificationCreateManyInput = {
    id?: number
    missionCompletionId: number
    type: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MissionVerificationUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionVerificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    missionCompletionId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeCreateInput = {
    name: string
    imageUrl?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBadgesInput
  }

  export type BadgeUncheckedCreateInput = {
    id?: number
    userId: number
    name: string
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type BadgeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBadgesNestedInput
  }

  export type BadgeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeCreateManyInput = {
    id?: number
    userId: number
    name: string
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type BadgeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendCreateInput = {
    createdAt?: Date | string
    friend: UserCreateNestedOneWithoutFriendOfInput
    user: UserCreateNestedOneWithoutFriendsInput
  }

  export type FriendUncheckedCreateInput = {
    id?: number
    userId: number
    friendId: number
    createdAt?: Date | string
  }

  export type FriendUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friend?: UserUpdateOneRequiredWithoutFriendOfNestedInput
    user?: UserUpdateOneRequiredWithoutFriendsNestedInput
  }

  export type FriendUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendCreateManyInput = {
    id?: number
    userId: number
    friendId: number
    createdAt?: Date | string
  }

  export type FriendUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyWeeklyProgressCreateInput = {
    date: Date | string
    type: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDailyProgressInput
  }

  export type DailyWeeklyProgressUncheckedCreateInput = {
    id?: number
    userId: number
    date: Date | string
    type: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DailyWeeklyProgressUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyProgressNestedInput
  }

  export type DailyWeeklyProgressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyWeeklyProgressCreateManyInput = {
    id?: number
    userId: number
    date: Date | string
    type: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DailyWeeklyProgressUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyWeeklyProgressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BadgeListRelationFilter = {
    every?: BadgeWhereInput
    some?: BadgeWhereInput
    none?: BadgeWhereInput
  }

  export type DailyWeeklyProgressListRelationFilter = {
    every?: DailyWeeklyProgressWhereInput
    some?: DailyWeeklyProgressWhereInput
    none?: DailyWeeklyProgressWhereInput
  }

  export type FriendListRelationFilter = {
    every?: FriendWhereInput
    some?: FriendWhereInput
    none?: FriendWhereInput
  }

  export type MissionCompletionListRelationFilter = {
    every?: MissionCompletionWhereInput
    some?: MissionCompletionWhereInput
    none?: MissionCompletionWhereInput
  }

  export type SurveyListRelationFilter = {
    every?: SurveyWhereInput
    some?: SurveyWhereInput
    none?: SurveyWhereInput
  }

  export type BadgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyWeeklyProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MissionCompletionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SurveyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SurveyOrderByRelevanceInput = {
    fields: SurveyOrderByRelevanceFieldEnum | SurveyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SurveyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
  }

  export type SurveyAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    age?: SortOrder
  }

  export type SurveyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
  }

  export type SurveyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
  }

  export type SurveySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    age?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumMissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionType | EnumMissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MissionType[]
    notIn?: $Enums.MissionType[]
    not?: NestedEnumMissionTypeFilter<$PrismaModel> | $Enums.MissionType
  }

  export type MissionOrderByRelevanceInput = {
    fields: MissionOrderByRelevanceFieldEnum | MissionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MissionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    verificationType?: SortOrder
    verificationData?: SortOrder
    createdAt?: SortOrder
  }

  export type MissionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MissionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    verificationType?: SortOrder
    createdAt?: SortOrder
  }

  export type MissionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    verificationType?: SortOrder
    createdAt?: SortOrder
  }

  export type MissionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumMissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionType | EnumMissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MissionType[]
    notIn?: $Enums.MissionType[]
    not?: NestedEnumMissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.MissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMissionTypeFilter<$PrismaModel>
    _max?: NestedEnumMissionTypeFilter<$PrismaModel>
  }

  export type EnumMissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionStatus | EnumMissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MissionStatus[]
    notIn?: $Enums.MissionStatus[]
    not?: NestedEnumMissionStatusFilter<$PrismaModel> | $Enums.MissionStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MissionScalarRelationFilter = {
    is?: MissionWhereInput
    isNot?: MissionWhereInput
  }

  export type MissionVerificationListRelationFilter = {
    every?: MissionVerificationWhereInput
    some?: MissionVerificationWhereInput
    none?: MissionVerificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MissionVerificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MissionCompletionOrderByRelevanceInput = {
    fields: MissionCompletionOrderByRelevanceFieldEnum | MissionCompletionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MissionCompletionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
    completedAt?: SortOrder
    verificationData?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
  }

  export type MissionCompletionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
  }

  export type MissionCompletionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
    completedAt?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
  }

  export type MissionCompletionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
    completedAt?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
  }

  export type MissionCompletionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
  }

  export type EnumMissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionStatus | EnumMissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MissionStatus[]
    notIn?: $Enums.MissionStatus[]
    not?: NestedEnumMissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.MissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMissionStatusFilter<$PrismaModel>
    _max?: NestedEnumMissionStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MissionCompletionScalarRelationFilter = {
    is?: MissionCompletionWhereInput
    isNot?: MissionCompletionWhereInput
  }

  export type MissionVerificationOrderByRelevanceInput = {
    fields: MissionVerificationOrderByRelevanceFieldEnum | MissionVerificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MissionVerificationCountOrderByAggregateInput = {
    id?: SortOrder
    missionCompletionId?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type MissionVerificationAvgOrderByAggregateInput = {
    id?: SortOrder
    missionCompletionId?: SortOrder
  }

  export type MissionVerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    missionCompletionId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type MissionVerificationMinOrderByAggregateInput = {
    id?: SortOrder
    missionCompletionId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type MissionVerificationSumOrderByAggregateInput = {
    id?: SortOrder
    missionCompletionId?: SortOrder
  }

  export type BadgeOrderByRelevanceInput = {
    fields: BadgeOrderByRelevanceFieldEnum | BadgeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BadgeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type BadgeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type BadgeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type BadgeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FriendCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
  }

  export type FriendMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
  }

  export type DailyWeeklyProgressOrderByRelevanceInput = {
    fields: DailyWeeklyProgressOrderByRelevanceFieldEnum | DailyWeeklyProgressOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DailyWeeklyProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyWeeklyProgressAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DailyWeeklyProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyWeeklyProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyWeeklyProgressSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BadgeCreateNestedManyWithoutUserInput = {
    create?: XOR<BadgeCreateWithoutUserInput, BadgeUncheckedCreateWithoutUserInput> | BadgeCreateWithoutUserInput[] | BadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BadgeCreateOrConnectWithoutUserInput | BadgeCreateOrConnectWithoutUserInput[]
    createMany?: BadgeCreateManyUserInputEnvelope
    connect?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
  }

  export type DailyWeeklyProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyWeeklyProgressCreateWithoutUserInput, DailyWeeklyProgressUncheckedCreateWithoutUserInput> | DailyWeeklyProgressCreateWithoutUserInput[] | DailyWeeklyProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyWeeklyProgressCreateOrConnectWithoutUserInput | DailyWeeklyProgressCreateOrConnectWithoutUserInput[]
    createMany?: DailyWeeklyProgressCreateManyUserInputEnvelope
    connect?: DailyWeeklyProgressWhereUniqueInput | DailyWeeklyProgressWhereUniqueInput[]
  }

  export type FriendCreateNestedManyWithoutFriendInput = {
    create?: XOR<FriendCreateWithoutFriendInput, FriendUncheckedCreateWithoutFriendInput> | FriendCreateWithoutFriendInput[] | FriendUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendInput | FriendCreateOrConnectWithoutFriendInput[]
    createMany?: FriendCreateManyFriendInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type FriendCreateNestedManyWithoutUserInput = {
    create?: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput> | FriendCreateWithoutUserInput[] | FriendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutUserInput | FriendCreateOrConnectWithoutUserInput[]
    createMany?: FriendCreateManyUserInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type MissionCompletionCreateNestedManyWithoutUserInput = {
    create?: XOR<MissionCompletionCreateWithoutUserInput, MissionCompletionUncheckedCreateWithoutUserInput> | MissionCompletionCreateWithoutUserInput[] | MissionCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MissionCompletionCreateOrConnectWithoutUserInput | MissionCompletionCreateOrConnectWithoutUserInput[]
    createMany?: MissionCompletionCreateManyUserInputEnvelope
    connect?: MissionCompletionWhereUniqueInput | MissionCompletionWhereUniqueInput[]
  }

  export type SurveyCreateNestedManyWithoutUserInput = {
    create?: XOR<SurveyCreateWithoutUserInput, SurveyUncheckedCreateWithoutUserInput> | SurveyCreateWithoutUserInput[] | SurveyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SurveyCreateOrConnectWithoutUserInput | SurveyCreateOrConnectWithoutUserInput[]
    createMany?: SurveyCreateManyUserInputEnvelope
    connect?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
  }

  export type BadgeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BadgeCreateWithoutUserInput, BadgeUncheckedCreateWithoutUserInput> | BadgeCreateWithoutUserInput[] | BadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BadgeCreateOrConnectWithoutUserInput | BadgeCreateOrConnectWithoutUserInput[]
    createMany?: BadgeCreateManyUserInputEnvelope
    connect?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
  }

  export type DailyWeeklyProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyWeeklyProgressCreateWithoutUserInput, DailyWeeklyProgressUncheckedCreateWithoutUserInput> | DailyWeeklyProgressCreateWithoutUserInput[] | DailyWeeklyProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyWeeklyProgressCreateOrConnectWithoutUserInput | DailyWeeklyProgressCreateOrConnectWithoutUserInput[]
    createMany?: DailyWeeklyProgressCreateManyUserInputEnvelope
    connect?: DailyWeeklyProgressWhereUniqueInput | DailyWeeklyProgressWhereUniqueInput[]
  }

  export type FriendUncheckedCreateNestedManyWithoutFriendInput = {
    create?: XOR<FriendCreateWithoutFriendInput, FriendUncheckedCreateWithoutFriendInput> | FriendCreateWithoutFriendInput[] | FriendUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendInput | FriendCreateOrConnectWithoutFriendInput[]
    createMany?: FriendCreateManyFriendInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type FriendUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput> | FriendCreateWithoutUserInput[] | FriendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutUserInput | FriendCreateOrConnectWithoutUserInput[]
    createMany?: FriendCreateManyUserInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type MissionCompletionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MissionCompletionCreateWithoutUserInput, MissionCompletionUncheckedCreateWithoutUserInput> | MissionCompletionCreateWithoutUserInput[] | MissionCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MissionCompletionCreateOrConnectWithoutUserInput | MissionCompletionCreateOrConnectWithoutUserInput[]
    createMany?: MissionCompletionCreateManyUserInputEnvelope
    connect?: MissionCompletionWhereUniqueInput | MissionCompletionWhereUniqueInput[]
  }

  export type SurveyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SurveyCreateWithoutUserInput, SurveyUncheckedCreateWithoutUserInput> | SurveyCreateWithoutUserInput[] | SurveyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SurveyCreateOrConnectWithoutUserInput | SurveyCreateOrConnectWithoutUserInput[]
    createMany?: SurveyCreateManyUserInputEnvelope
    connect?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BadgeUpdateManyWithoutUserNestedInput = {
    create?: XOR<BadgeCreateWithoutUserInput, BadgeUncheckedCreateWithoutUserInput> | BadgeCreateWithoutUserInput[] | BadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BadgeCreateOrConnectWithoutUserInput | BadgeCreateOrConnectWithoutUserInput[]
    upsert?: BadgeUpsertWithWhereUniqueWithoutUserInput | BadgeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BadgeCreateManyUserInputEnvelope
    set?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
    disconnect?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
    delete?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
    connect?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
    update?: BadgeUpdateWithWhereUniqueWithoutUserInput | BadgeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BadgeUpdateManyWithWhereWithoutUserInput | BadgeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BadgeScalarWhereInput | BadgeScalarWhereInput[]
  }

  export type DailyWeeklyProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyWeeklyProgressCreateWithoutUserInput, DailyWeeklyProgressUncheckedCreateWithoutUserInput> | DailyWeeklyProgressCreateWithoutUserInput[] | DailyWeeklyProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyWeeklyProgressCreateOrConnectWithoutUserInput | DailyWeeklyProgressCreateOrConnectWithoutUserInput[]
    upsert?: DailyWeeklyProgressUpsertWithWhereUniqueWithoutUserInput | DailyWeeklyProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyWeeklyProgressCreateManyUserInputEnvelope
    set?: DailyWeeklyProgressWhereUniqueInput | DailyWeeklyProgressWhereUniqueInput[]
    disconnect?: DailyWeeklyProgressWhereUniqueInput | DailyWeeklyProgressWhereUniqueInput[]
    delete?: DailyWeeklyProgressWhereUniqueInput | DailyWeeklyProgressWhereUniqueInput[]
    connect?: DailyWeeklyProgressWhereUniqueInput | DailyWeeklyProgressWhereUniqueInput[]
    update?: DailyWeeklyProgressUpdateWithWhereUniqueWithoutUserInput | DailyWeeklyProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyWeeklyProgressUpdateManyWithWhereWithoutUserInput | DailyWeeklyProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyWeeklyProgressScalarWhereInput | DailyWeeklyProgressScalarWhereInput[]
  }

  export type FriendUpdateManyWithoutFriendNestedInput = {
    create?: XOR<FriendCreateWithoutFriendInput, FriendUncheckedCreateWithoutFriendInput> | FriendCreateWithoutFriendInput[] | FriendUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendInput | FriendCreateOrConnectWithoutFriendInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutFriendInput | FriendUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: FriendCreateManyFriendInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutFriendInput | FriendUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutFriendInput | FriendUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type FriendUpdateManyWithoutUserNestedInput = {
    create?: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput> | FriendCreateWithoutUserInput[] | FriendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutUserInput | FriendCreateOrConnectWithoutUserInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutUserInput | FriendUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FriendCreateManyUserInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutUserInput | FriendUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutUserInput | FriendUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type MissionCompletionUpdateManyWithoutUserNestedInput = {
    create?: XOR<MissionCompletionCreateWithoutUserInput, MissionCompletionUncheckedCreateWithoutUserInput> | MissionCompletionCreateWithoutUserInput[] | MissionCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MissionCompletionCreateOrConnectWithoutUserInput | MissionCompletionCreateOrConnectWithoutUserInput[]
    upsert?: MissionCompletionUpsertWithWhereUniqueWithoutUserInput | MissionCompletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MissionCompletionCreateManyUserInputEnvelope
    set?: MissionCompletionWhereUniqueInput | MissionCompletionWhereUniqueInput[]
    disconnect?: MissionCompletionWhereUniqueInput | MissionCompletionWhereUniqueInput[]
    delete?: MissionCompletionWhereUniqueInput | MissionCompletionWhereUniqueInput[]
    connect?: MissionCompletionWhereUniqueInput | MissionCompletionWhereUniqueInput[]
    update?: MissionCompletionUpdateWithWhereUniqueWithoutUserInput | MissionCompletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MissionCompletionUpdateManyWithWhereWithoutUserInput | MissionCompletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MissionCompletionScalarWhereInput | MissionCompletionScalarWhereInput[]
  }

  export type SurveyUpdateManyWithoutUserNestedInput = {
    create?: XOR<SurveyCreateWithoutUserInput, SurveyUncheckedCreateWithoutUserInput> | SurveyCreateWithoutUserInput[] | SurveyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SurveyCreateOrConnectWithoutUserInput | SurveyCreateOrConnectWithoutUserInput[]
    upsert?: SurveyUpsertWithWhereUniqueWithoutUserInput | SurveyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SurveyCreateManyUserInputEnvelope
    set?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    disconnect?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    delete?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    connect?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    update?: SurveyUpdateWithWhereUniqueWithoutUserInput | SurveyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SurveyUpdateManyWithWhereWithoutUserInput | SurveyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SurveyScalarWhereInput | SurveyScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BadgeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BadgeCreateWithoutUserInput, BadgeUncheckedCreateWithoutUserInput> | BadgeCreateWithoutUserInput[] | BadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BadgeCreateOrConnectWithoutUserInput | BadgeCreateOrConnectWithoutUserInput[]
    upsert?: BadgeUpsertWithWhereUniqueWithoutUserInput | BadgeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BadgeCreateManyUserInputEnvelope
    set?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
    disconnect?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
    delete?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
    connect?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
    update?: BadgeUpdateWithWhereUniqueWithoutUserInput | BadgeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BadgeUpdateManyWithWhereWithoutUserInput | BadgeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BadgeScalarWhereInput | BadgeScalarWhereInput[]
  }

  export type DailyWeeklyProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyWeeklyProgressCreateWithoutUserInput, DailyWeeklyProgressUncheckedCreateWithoutUserInput> | DailyWeeklyProgressCreateWithoutUserInput[] | DailyWeeklyProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyWeeklyProgressCreateOrConnectWithoutUserInput | DailyWeeklyProgressCreateOrConnectWithoutUserInput[]
    upsert?: DailyWeeklyProgressUpsertWithWhereUniqueWithoutUserInput | DailyWeeklyProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyWeeklyProgressCreateManyUserInputEnvelope
    set?: DailyWeeklyProgressWhereUniqueInput | DailyWeeklyProgressWhereUniqueInput[]
    disconnect?: DailyWeeklyProgressWhereUniqueInput | DailyWeeklyProgressWhereUniqueInput[]
    delete?: DailyWeeklyProgressWhereUniqueInput | DailyWeeklyProgressWhereUniqueInput[]
    connect?: DailyWeeklyProgressWhereUniqueInput | DailyWeeklyProgressWhereUniqueInput[]
    update?: DailyWeeklyProgressUpdateWithWhereUniqueWithoutUserInput | DailyWeeklyProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyWeeklyProgressUpdateManyWithWhereWithoutUserInput | DailyWeeklyProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyWeeklyProgressScalarWhereInput | DailyWeeklyProgressScalarWhereInput[]
  }

  export type FriendUncheckedUpdateManyWithoutFriendNestedInput = {
    create?: XOR<FriendCreateWithoutFriendInput, FriendUncheckedCreateWithoutFriendInput> | FriendCreateWithoutFriendInput[] | FriendUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendInput | FriendCreateOrConnectWithoutFriendInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutFriendInput | FriendUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: FriendCreateManyFriendInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutFriendInput | FriendUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutFriendInput | FriendUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type FriendUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput> | FriendCreateWithoutUserInput[] | FriendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutUserInput | FriendCreateOrConnectWithoutUserInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutUserInput | FriendUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FriendCreateManyUserInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutUserInput | FriendUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutUserInput | FriendUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type MissionCompletionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MissionCompletionCreateWithoutUserInput, MissionCompletionUncheckedCreateWithoutUserInput> | MissionCompletionCreateWithoutUserInput[] | MissionCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MissionCompletionCreateOrConnectWithoutUserInput | MissionCompletionCreateOrConnectWithoutUserInput[]
    upsert?: MissionCompletionUpsertWithWhereUniqueWithoutUserInput | MissionCompletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MissionCompletionCreateManyUserInputEnvelope
    set?: MissionCompletionWhereUniqueInput | MissionCompletionWhereUniqueInput[]
    disconnect?: MissionCompletionWhereUniqueInput | MissionCompletionWhereUniqueInput[]
    delete?: MissionCompletionWhereUniqueInput | MissionCompletionWhereUniqueInput[]
    connect?: MissionCompletionWhereUniqueInput | MissionCompletionWhereUniqueInput[]
    update?: MissionCompletionUpdateWithWhereUniqueWithoutUserInput | MissionCompletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MissionCompletionUpdateManyWithWhereWithoutUserInput | MissionCompletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MissionCompletionScalarWhereInput | MissionCompletionScalarWhereInput[]
  }

  export type SurveyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SurveyCreateWithoutUserInput, SurveyUncheckedCreateWithoutUserInput> | SurveyCreateWithoutUserInput[] | SurveyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SurveyCreateOrConnectWithoutUserInput | SurveyCreateOrConnectWithoutUserInput[]
    upsert?: SurveyUpsertWithWhereUniqueWithoutUserInput | SurveyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SurveyCreateManyUserInputEnvelope
    set?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    disconnect?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    delete?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    connect?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    update?: SurveyUpdateWithWhereUniqueWithoutUserInput | SurveyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SurveyUpdateManyWithWhereWithoutUserInput | SurveyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SurveyScalarWhereInput | SurveyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSurveysInput = {
    create?: XOR<UserCreateWithoutSurveysInput, UserUncheckedCreateWithoutSurveysInput>
    connectOrCreate?: UserCreateOrConnectWithoutSurveysInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSurveysNestedInput = {
    create?: XOR<UserCreateWithoutSurveysInput, UserUncheckedCreateWithoutSurveysInput>
    connectOrCreate?: UserCreateOrConnectWithoutSurveysInput
    upsert?: UserUpsertWithoutSurveysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSurveysInput, UserUpdateWithoutSurveysInput>, UserUncheckedUpdateWithoutSurveysInput>
  }

  export type MissionCompletionCreateNestedManyWithoutMissionInput = {
    create?: XOR<MissionCompletionCreateWithoutMissionInput, MissionCompletionUncheckedCreateWithoutMissionInput> | MissionCompletionCreateWithoutMissionInput[] | MissionCompletionUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionCompletionCreateOrConnectWithoutMissionInput | MissionCompletionCreateOrConnectWithoutMissionInput[]
    createMany?: MissionCompletionCreateManyMissionInputEnvelope
    connect?: MissionCompletionWhereUniqueInput | MissionCompletionWhereUniqueInput[]
  }

  export type MissionCompletionUncheckedCreateNestedManyWithoutMissionInput = {
    create?: XOR<MissionCompletionCreateWithoutMissionInput, MissionCompletionUncheckedCreateWithoutMissionInput> | MissionCompletionCreateWithoutMissionInput[] | MissionCompletionUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionCompletionCreateOrConnectWithoutMissionInput | MissionCompletionCreateOrConnectWithoutMissionInput[]
    createMany?: MissionCompletionCreateManyMissionInputEnvelope
    connect?: MissionCompletionWhereUniqueInput | MissionCompletionWhereUniqueInput[]
  }

  export type EnumMissionTypeFieldUpdateOperationsInput = {
    set?: $Enums.MissionType
  }

  export type MissionCompletionUpdateManyWithoutMissionNestedInput = {
    create?: XOR<MissionCompletionCreateWithoutMissionInput, MissionCompletionUncheckedCreateWithoutMissionInput> | MissionCompletionCreateWithoutMissionInput[] | MissionCompletionUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionCompletionCreateOrConnectWithoutMissionInput | MissionCompletionCreateOrConnectWithoutMissionInput[]
    upsert?: MissionCompletionUpsertWithWhereUniqueWithoutMissionInput | MissionCompletionUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: MissionCompletionCreateManyMissionInputEnvelope
    set?: MissionCompletionWhereUniqueInput | MissionCompletionWhereUniqueInput[]
    disconnect?: MissionCompletionWhereUniqueInput | MissionCompletionWhereUniqueInput[]
    delete?: MissionCompletionWhereUniqueInput | MissionCompletionWhereUniqueInput[]
    connect?: MissionCompletionWhereUniqueInput | MissionCompletionWhereUniqueInput[]
    update?: MissionCompletionUpdateWithWhereUniqueWithoutMissionInput | MissionCompletionUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: MissionCompletionUpdateManyWithWhereWithoutMissionInput | MissionCompletionUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: MissionCompletionScalarWhereInput | MissionCompletionScalarWhereInput[]
  }

  export type MissionCompletionUncheckedUpdateManyWithoutMissionNestedInput = {
    create?: XOR<MissionCompletionCreateWithoutMissionInput, MissionCompletionUncheckedCreateWithoutMissionInput> | MissionCompletionCreateWithoutMissionInput[] | MissionCompletionUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionCompletionCreateOrConnectWithoutMissionInput | MissionCompletionCreateOrConnectWithoutMissionInput[]
    upsert?: MissionCompletionUpsertWithWhereUniqueWithoutMissionInput | MissionCompletionUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: MissionCompletionCreateManyMissionInputEnvelope
    set?: MissionCompletionWhereUniqueInput | MissionCompletionWhereUniqueInput[]
    disconnect?: MissionCompletionWhereUniqueInput | MissionCompletionWhereUniqueInput[]
    delete?: MissionCompletionWhereUniqueInput | MissionCompletionWhereUniqueInput[]
    connect?: MissionCompletionWhereUniqueInput | MissionCompletionWhereUniqueInput[]
    update?: MissionCompletionUpdateWithWhereUniqueWithoutMissionInput | MissionCompletionUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: MissionCompletionUpdateManyWithWhereWithoutMissionInput | MissionCompletionUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: MissionCompletionScalarWhereInput | MissionCompletionScalarWhereInput[]
  }

  export type MissionCreateNestedOneWithoutCompletionsInput = {
    create?: XOR<MissionCreateWithoutCompletionsInput, MissionUncheckedCreateWithoutCompletionsInput>
    connectOrCreate?: MissionCreateOrConnectWithoutCompletionsInput
    connect?: MissionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMissionsInput = {
    create?: XOR<UserCreateWithoutMissionsInput, UserUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMissionsInput
    connect?: UserWhereUniqueInput
  }

  export type MissionVerificationCreateNestedManyWithoutMissionCompletionInput = {
    create?: XOR<MissionVerificationCreateWithoutMissionCompletionInput, MissionVerificationUncheckedCreateWithoutMissionCompletionInput> | MissionVerificationCreateWithoutMissionCompletionInput[] | MissionVerificationUncheckedCreateWithoutMissionCompletionInput[]
    connectOrCreate?: MissionVerificationCreateOrConnectWithoutMissionCompletionInput | MissionVerificationCreateOrConnectWithoutMissionCompletionInput[]
    createMany?: MissionVerificationCreateManyMissionCompletionInputEnvelope
    connect?: MissionVerificationWhereUniqueInput | MissionVerificationWhereUniqueInput[]
  }

  export type MissionVerificationUncheckedCreateNestedManyWithoutMissionCompletionInput = {
    create?: XOR<MissionVerificationCreateWithoutMissionCompletionInput, MissionVerificationUncheckedCreateWithoutMissionCompletionInput> | MissionVerificationCreateWithoutMissionCompletionInput[] | MissionVerificationUncheckedCreateWithoutMissionCompletionInput[]
    connectOrCreate?: MissionVerificationCreateOrConnectWithoutMissionCompletionInput | MissionVerificationCreateOrConnectWithoutMissionCompletionInput[]
    createMany?: MissionVerificationCreateManyMissionCompletionInputEnvelope
    connect?: MissionVerificationWhereUniqueInput | MissionVerificationWhereUniqueInput[]
  }

  export type EnumMissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.MissionStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MissionUpdateOneRequiredWithoutCompletionsNestedInput = {
    create?: XOR<MissionCreateWithoutCompletionsInput, MissionUncheckedCreateWithoutCompletionsInput>
    connectOrCreate?: MissionCreateOrConnectWithoutCompletionsInput
    upsert?: MissionUpsertWithoutCompletionsInput
    connect?: MissionWhereUniqueInput
    update?: XOR<XOR<MissionUpdateToOneWithWhereWithoutCompletionsInput, MissionUpdateWithoutCompletionsInput>, MissionUncheckedUpdateWithoutCompletionsInput>
  }

  export type UserUpdateOneRequiredWithoutMissionsNestedInput = {
    create?: XOR<UserCreateWithoutMissionsInput, UserUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMissionsInput
    upsert?: UserUpsertWithoutMissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMissionsInput, UserUpdateWithoutMissionsInput>, UserUncheckedUpdateWithoutMissionsInput>
  }

  export type MissionVerificationUpdateManyWithoutMissionCompletionNestedInput = {
    create?: XOR<MissionVerificationCreateWithoutMissionCompletionInput, MissionVerificationUncheckedCreateWithoutMissionCompletionInput> | MissionVerificationCreateWithoutMissionCompletionInput[] | MissionVerificationUncheckedCreateWithoutMissionCompletionInput[]
    connectOrCreate?: MissionVerificationCreateOrConnectWithoutMissionCompletionInput | MissionVerificationCreateOrConnectWithoutMissionCompletionInput[]
    upsert?: MissionVerificationUpsertWithWhereUniqueWithoutMissionCompletionInput | MissionVerificationUpsertWithWhereUniqueWithoutMissionCompletionInput[]
    createMany?: MissionVerificationCreateManyMissionCompletionInputEnvelope
    set?: MissionVerificationWhereUniqueInput | MissionVerificationWhereUniqueInput[]
    disconnect?: MissionVerificationWhereUniqueInput | MissionVerificationWhereUniqueInput[]
    delete?: MissionVerificationWhereUniqueInput | MissionVerificationWhereUniqueInput[]
    connect?: MissionVerificationWhereUniqueInput | MissionVerificationWhereUniqueInput[]
    update?: MissionVerificationUpdateWithWhereUniqueWithoutMissionCompletionInput | MissionVerificationUpdateWithWhereUniqueWithoutMissionCompletionInput[]
    updateMany?: MissionVerificationUpdateManyWithWhereWithoutMissionCompletionInput | MissionVerificationUpdateManyWithWhereWithoutMissionCompletionInput[]
    deleteMany?: MissionVerificationScalarWhereInput | MissionVerificationScalarWhereInput[]
  }

  export type MissionVerificationUncheckedUpdateManyWithoutMissionCompletionNestedInput = {
    create?: XOR<MissionVerificationCreateWithoutMissionCompletionInput, MissionVerificationUncheckedCreateWithoutMissionCompletionInput> | MissionVerificationCreateWithoutMissionCompletionInput[] | MissionVerificationUncheckedCreateWithoutMissionCompletionInput[]
    connectOrCreate?: MissionVerificationCreateOrConnectWithoutMissionCompletionInput | MissionVerificationCreateOrConnectWithoutMissionCompletionInput[]
    upsert?: MissionVerificationUpsertWithWhereUniqueWithoutMissionCompletionInput | MissionVerificationUpsertWithWhereUniqueWithoutMissionCompletionInput[]
    createMany?: MissionVerificationCreateManyMissionCompletionInputEnvelope
    set?: MissionVerificationWhereUniqueInput | MissionVerificationWhereUniqueInput[]
    disconnect?: MissionVerificationWhereUniqueInput | MissionVerificationWhereUniqueInput[]
    delete?: MissionVerificationWhereUniqueInput | MissionVerificationWhereUniqueInput[]
    connect?: MissionVerificationWhereUniqueInput | MissionVerificationWhereUniqueInput[]
    update?: MissionVerificationUpdateWithWhereUniqueWithoutMissionCompletionInput | MissionVerificationUpdateWithWhereUniqueWithoutMissionCompletionInput[]
    updateMany?: MissionVerificationUpdateManyWithWhereWithoutMissionCompletionInput | MissionVerificationUpdateManyWithWhereWithoutMissionCompletionInput[]
    deleteMany?: MissionVerificationScalarWhereInput | MissionVerificationScalarWhereInput[]
  }

  export type MissionCompletionCreateNestedOneWithoutVerificationsInput = {
    create?: XOR<MissionCompletionCreateWithoutVerificationsInput, MissionCompletionUncheckedCreateWithoutVerificationsInput>
    connectOrCreate?: MissionCompletionCreateOrConnectWithoutVerificationsInput
    connect?: MissionCompletionWhereUniqueInput
  }

  export type MissionCompletionUpdateOneRequiredWithoutVerificationsNestedInput = {
    create?: XOR<MissionCompletionCreateWithoutVerificationsInput, MissionCompletionUncheckedCreateWithoutVerificationsInput>
    connectOrCreate?: MissionCompletionCreateOrConnectWithoutVerificationsInput
    upsert?: MissionCompletionUpsertWithoutVerificationsInput
    connect?: MissionCompletionWhereUniqueInput
    update?: XOR<XOR<MissionCompletionUpdateToOneWithWhereWithoutVerificationsInput, MissionCompletionUpdateWithoutVerificationsInput>, MissionCompletionUncheckedUpdateWithoutVerificationsInput>
  }

  export type UserCreateNestedOneWithoutBadgesInput = {
    create?: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBadgesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBadgesNestedInput = {
    create?: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBadgesInput
    upsert?: UserUpsertWithoutBadgesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBadgesInput, UserUpdateWithoutBadgesInput>, UserUncheckedUpdateWithoutBadgesInput>
  }

  export type UserCreateNestedOneWithoutFriendOfInput = {
    create?: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFriendsInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFriendOfNestedInput = {
    create?: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput
    upsert?: UserUpsertWithoutFriendOfInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendOfInput, UserUpdateWithoutFriendOfInput>, UserUncheckedUpdateWithoutFriendOfInput>
  }

  export type UserUpdateOneRequiredWithoutFriendsNestedInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput
    upsert?: UserUpsertWithoutFriendsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendsInput, UserUpdateWithoutFriendsInput>, UserUncheckedUpdateWithoutFriendsInput>
  }

  export type UserCreateNestedOneWithoutDailyProgressInput = {
    create?: XOR<UserCreateWithoutDailyProgressInput, UserUncheckedCreateWithoutDailyProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyProgressInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDailyProgressNestedInput = {
    create?: XOR<UserCreateWithoutDailyProgressInput, UserUncheckedCreateWithoutDailyProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyProgressInput
    upsert?: UserUpsertWithoutDailyProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyProgressInput, UserUpdateWithoutDailyProgressInput>, UserUncheckedUpdateWithoutDailyProgressInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumMissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionType | EnumMissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MissionType[]
    notIn?: $Enums.MissionType[]
    not?: NestedEnumMissionTypeFilter<$PrismaModel> | $Enums.MissionType
  }

  export type NestedEnumMissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionType | EnumMissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MissionType[]
    notIn?: $Enums.MissionType[]
    not?: NestedEnumMissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.MissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMissionTypeFilter<$PrismaModel>
    _max?: NestedEnumMissionTypeFilter<$PrismaModel>
  }

  export type NestedEnumMissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionStatus | EnumMissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MissionStatus[]
    notIn?: $Enums.MissionStatus[]
    not?: NestedEnumMissionStatusFilter<$PrismaModel> | $Enums.MissionStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumMissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionStatus | EnumMissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MissionStatus[]
    notIn?: $Enums.MissionStatus[]
    not?: NestedEnumMissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.MissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMissionStatusFilter<$PrismaModel>
    _max?: NestedEnumMissionStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BadgeCreateWithoutUserInput = {
    name: string
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type BadgeUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type BadgeCreateOrConnectWithoutUserInput = {
    where: BadgeWhereUniqueInput
    create: XOR<BadgeCreateWithoutUserInput, BadgeUncheckedCreateWithoutUserInput>
  }

  export type BadgeCreateManyUserInputEnvelope = {
    data: BadgeCreateManyUserInput | BadgeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DailyWeeklyProgressCreateWithoutUserInput = {
    date: Date | string
    type: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DailyWeeklyProgressUncheckedCreateWithoutUserInput = {
    id?: number
    date: Date | string
    type: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DailyWeeklyProgressCreateOrConnectWithoutUserInput = {
    where: DailyWeeklyProgressWhereUniqueInput
    create: XOR<DailyWeeklyProgressCreateWithoutUserInput, DailyWeeklyProgressUncheckedCreateWithoutUserInput>
  }

  export type DailyWeeklyProgressCreateManyUserInputEnvelope = {
    data: DailyWeeklyProgressCreateManyUserInput | DailyWeeklyProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendCreateWithoutFriendInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFriendsInput
  }

  export type FriendUncheckedCreateWithoutFriendInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type FriendCreateOrConnectWithoutFriendInput = {
    where: FriendWhereUniqueInput
    create: XOR<FriendCreateWithoutFriendInput, FriendUncheckedCreateWithoutFriendInput>
  }

  export type FriendCreateManyFriendInputEnvelope = {
    data: FriendCreateManyFriendInput | FriendCreateManyFriendInput[]
    skipDuplicates?: boolean
  }

  export type FriendCreateWithoutUserInput = {
    createdAt?: Date | string
    friend: UserCreateNestedOneWithoutFriendOfInput
  }

  export type FriendUncheckedCreateWithoutUserInput = {
    id?: number
    friendId: number
    createdAt?: Date | string
  }

  export type FriendCreateOrConnectWithoutUserInput = {
    where: FriendWhereUniqueInput
    create: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput>
  }

  export type FriendCreateManyUserInputEnvelope = {
    data: FriendCreateManyUserInput | FriendCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MissionCompletionCreateWithoutUserInput = {
    completedAt?: Date | string
    verificationData: JsonNullValueInput | InputJsonValue
    status: $Enums.MissionStatus
    feedback?: string | null
    mission: MissionCreateNestedOneWithoutCompletionsInput
    verifications?: MissionVerificationCreateNestedManyWithoutMissionCompletionInput
  }

  export type MissionCompletionUncheckedCreateWithoutUserInput = {
    id?: number
    missionId: number
    completedAt?: Date | string
    verificationData: JsonNullValueInput | InputJsonValue
    status: $Enums.MissionStatus
    feedback?: string | null
    verifications?: MissionVerificationUncheckedCreateNestedManyWithoutMissionCompletionInput
  }

  export type MissionCompletionCreateOrConnectWithoutUserInput = {
    where: MissionCompletionWhereUniqueInput
    create: XOR<MissionCompletionCreateWithoutUserInput, MissionCompletionUncheckedCreateWithoutUserInput>
  }

  export type MissionCompletionCreateManyUserInputEnvelope = {
    data: MissionCompletionCreateManyUserInput | MissionCompletionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SurveyCreateWithoutUserInput = {
    age: number
    gender: string
    answers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SurveyUncheckedCreateWithoutUserInput = {
    id?: number
    age: number
    gender: string
    answers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SurveyCreateOrConnectWithoutUserInput = {
    where: SurveyWhereUniqueInput
    create: XOR<SurveyCreateWithoutUserInput, SurveyUncheckedCreateWithoutUserInput>
  }

  export type SurveyCreateManyUserInputEnvelope = {
    data: SurveyCreateManyUserInput | SurveyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BadgeUpsertWithWhereUniqueWithoutUserInput = {
    where: BadgeWhereUniqueInput
    update: XOR<BadgeUpdateWithoutUserInput, BadgeUncheckedUpdateWithoutUserInput>
    create: XOR<BadgeCreateWithoutUserInput, BadgeUncheckedCreateWithoutUserInput>
  }

  export type BadgeUpdateWithWhereUniqueWithoutUserInput = {
    where: BadgeWhereUniqueInput
    data: XOR<BadgeUpdateWithoutUserInput, BadgeUncheckedUpdateWithoutUserInput>
  }

  export type BadgeUpdateManyWithWhereWithoutUserInput = {
    where: BadgeScalarWhereInput
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyWithoutUserInput>
  }

  export type BadgeScalarWhereInput = {
    AND?: BadgeScalarWhereInput | BadgeScalarWhereInput[]
    OR?: BadgeScalarWhereInput[]
    NOT?: BadgeScalarWhereInput | BadgeScalarWhereInput[]
    id?: IntFilter<"Badge"> | number
    userId?: IntFilter<"Badge"> | number
    name?: StringFilter<"Badge"> | string
    imageUrl?: StringNullableFilter<"Badge"> | string | null
    createdAt?: DateTimeFilter<"Badge"> | Date | string
  }

  export type DailyWeeklyProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyWeeklyProgressWhereUniqueInput
    update: XOR<DailyWeeklyProgressUpdateWithoutUserInput, DailyWeeklyProgressUncheckedUpdateWithoutUserInput>
    create: XOR<DailyWeeklyProgressCreateWithoutUserInput, DailyWeeklyProgressUncheckedCreateWithoutUserInput>
  }

  export type DailyWeeklyProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyWeeklyProgressWhereUniqueInput
    data: XOR<DailyWeeklyProgressUpdateWithoutUserInput, DailyWeeklyProgressUncheckedUpdateWithoutUserInput>
  }

  export type DailyWeeklyProgressUpdateManyWithWhereWithoutUserInput = {
    where: DailyWeeklyProgressScalarWhereInput
    data: XOR<DailyWeeklyProgressUpdateManyMutationInput, DailyWeeklyProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyWeeklyProgressScalarWhereInput = {
    AND?: DailyWeeklyProgressScalarWhereInput | DailyWeeklyProgressScalarWhereInput[]
    OR?: DailyWeeklyProgressScalarWhereInput[]
    NOT?: DailyWeeklyProgressScalarWhereInput | DailyWeeklyProgressScalarWhereInput[]
    id?: IntFilter<"DailyWeeklyProgress"> | number
    userId?: IntFilter<"DailyWeeklyProgress"> | number
    date?: DateTimeFilter<"DailyWeeklyProgress"> | Date | string
    type?: StringFilter<"DailyWeeklyProgress"> | string
    data?: JsonFilter<"DailyWeeklyProgress">
    createdAt?: DateTimeFilter<"DailyWeeklyProgress"> | Date | string
  }

  export type FriendUpsertWithWhereUniqueWithoutFriendInput = {
    where: FriendWhereUniqueInput
    update: XOR<FriendUpdateWithoutFriendInput, FriendUncheckedUpdateWithoutFriendInput>
    create: XOR<FriendCreateWithoutFriendInput, FriendUncheckedCreateWithoutFriendInput>
  }

  export type FriendUpdateWithWhereUniqueWithoutFriendInput = {
    where: FriendWhereUniqueInput
    data: XOR<FriendUpdateWithoutFriendInput, FriendUncheckedUpdateWithoutFriendInput>
  }

  export type FriendUpdateManyWithWhereWithoutFriendInput = {
    where: FriendScalarWhereInput
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyWithoutFriendInput>
  }

  export type FriendScalarWhereInput = {
    AND?: FriendScalarWhereInput | FriendScalarWhereInput[]
    OR?: FriendScalarWhereInput[]
    NOT?: FriendScalarWhereInput | FriendScalarWhereInput[]
    id?: IntFilter<"Friend"> | number
    userId?: IntFilter<"Friend"> | number
    friendId?: IntFilter<"Friend"> | number
    createdAt?: DateTimeFilter<"Friend"> | Date | string
  }

  export type FriendUpsertWithWhereUniqueWithoutUserInput = {
    where: FriendWhereUniqueInput
    update: XOR<FriendUpdateWithoutUserInput, FriendUncheckedUpdateWithoutUserInput>
    create: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput>
  }

  export type FriendUpdateWithWhereUniqueWithoutUserInput = {
    where: FriendWhereUniqueInput
    data: XOR<FriendUpdateWithoutUserInput, FriendUncheckedUpdateWithoutUserInput>
  }

  export type FriendUpdateManyWithWhereWithoutUserInput = {
    where: FriendScalarWhereInput
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyWithoutUserInput>
  }

  export type MissionCompletionUpsertWithWhereUniqueWithoutUserInput = {
    where: MissionCompletionWhereUniqueInput
    update: XOR<MissionCompletionUpdateWithoutUserInput, MissionCompletionUncheckedUpdateWithoutUserInput>
    create: XOR<MissionCompletionCreateWithoutUserInput, MissionCompletionUncheckedCreateWithoutUserInput>
  }

  export type MissionCompletionUpdateWithWhereUniqueWithoutUserInput = {
    where: MissionCompletionWhereUniqueInput
    data: XOR<MissionCompletionUpdateWithoutUserInput, MissionCompletionUncheckedUpdateWithoutUserInput>
  }

  export type MissionCompletionUpdateManyWithWhereWithoutUserInput = {
    where: MissionCompletionScalarWhereInput
    data: XOR<MissionCompletionUpdateManyMutationInput, MissionCompletionUncheckedUpdateManyWithoutUserInput>
  }

  export type MissionCompletionScalarWhereInput = {
    AND?: MissionCompletionScalarWhereInput | MissionCompletionScalarWhereInput[]
    OR?: MissionCompletionScalarWhereInput[]
    NOT?: MissionCompletionScalarWhereInput | MissionCompletionScalarWhereInput[]
    id?: IntFilter<"MissionCompletion"> | number
    userId?: IntFilter<"MissionCompletion"> | number
    missionId?: IntFilter<"MissionCompletion"> | number
    completedAt?: DateTimeFilter<"MissionCompletion"> | Date | string
    verificationData?: JsonFilter<"MissionCompletion">
    status?: EnumMissionStatusFilter<"MissionCompletion"> | $Enums.MissionStatus
    feedback?: StringNullableFilter<"MissionCompletion"> | string | null
  }

  export type SurveyUpsertWithWhereUniqueWithoutUserInput = {
    where: SurveyWhereUniqueInput
    update: XOR<SurveyUpdateWithoutUserInput, SurveyUncheckedUpdateWithoutUserInput>
    create: XOR<SurveyCreateWithoutUserInput, SurveyUncheckedCreateWithoutUserInput>
  }

  export type SurveyUpdateWithWhereUniqueWithoutUserInput = {
    where: SurveyWhereUniqueInput
    data: XOR<SurveyUpdateWithoutUserInput, SurveyUncheckedUpdateWithoutUserInput>
  }

  export type SurveyUpdateManyWithWhereWithoutUserInput = {
    where: SurveyScalarWhereInput
    data: XOR<SurveyUpdateManyMutationInput, SurveyUncheckedUpdateManyWithoutUserInput>
  }

  export type SurveyScalarWhereInput = {
    AND?: SurveyScalarWhereInput | SurveyScalarWhereInput[]
    OR?: SurveyScalarWhereInput[]
    NOT?: SurveyScalarWhereInput | SurveyScalarWhereInput[]
    id?: IntFilter<"Survey"> | number
    userId?: IntFilter<"Survey"> | number
    age?: IntFilter<"Survey"> | number
    gender?: StringFilter<"Survey"> | string
    answers?: JsonFilter<"Survey">
    createdAt?: DateTimeFilter<"Survey"> | Date | string
  }

  export type UserCreateWithoutSurveysInput = {
    email: string
    password: string
    nickname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: BadgeCreateNestedManyWithoutUserInput
    dailyProgress?: DailyWeeklyProgressCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    friends?: FriendCreateNestedManyWithoutUserInput
    missions?: MissionCompletionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSurveysInput = {
    id?: number
    email: string
    password: string
    nickname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: BadgeUncheckedCreateNestedManyWithoutUserInput
    dailyProgress?: DailyWeeklyProgressUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    missions?: MissionCompletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSurveysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSurveysInput, UserUncheckedCreateWithoutSurveysInput>
  }

  export type UserUpsertWithoutSurveysInput = {
    update: XOR<UserUpdateWithoutSurveysInput, UserUncheckedUpdateWithoutSurveysInput>
    create: XOR<UserCreateWithoutSurveysInput, UserUncheckedCreateWithoutSurveysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSurveysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSurveysInput, UserUncheckedUpdateWithoutSurveysInput>
  }

  export type UserUpdateWithoutSurveysInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: BadgeUpdateManyWithoutUserNestedInput
    dailyProgress?: DailyWeeklyProgressUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    friends?: FriendUpdateManyWithoutUserNestedInput
    missions?: MissionCompletionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSurveysInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: BadgeUncheckedUpdateManyWithoutUserNestedInput
    dailyProgress?: DailyWeeklyProgressUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    missions?: MissionCompletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MissionCompletionCreateWithoutMissionInput = {
    completedAt?: Date | string
    verificationData: JsonNullValueInput | InputJsonValue
    status: $Enums.MissionStatus
    feedback?: string | null
    user: UserCreateNestedOneWithoutMissionsInput
    verifications?: MissionVerificationCreateNestedManyWithoutMissionCompletionInput
  }

  export type MissionCompletionUncheckedCreateWithoutMissionInput = {
    id?: number
    userId: number
    completedAt?: Date | string
    verificationData: JsonNullValueInput | InputJsonValue
    status: $Enums.MissionStatus
    feedback?: string | null
    verifications?: MissionVerificationUncheckedCreateNestedManyWithoutMissionCompletionInput
  }

  export type MissionCompletionCreateOrConnectWithoutMissionInput = {
    where: MissionCompletionWhereUniqueInput
    create: XOR<MissionCompletionCreateWithoutMissionInput, MissionCompletionUncheckedCreateWithoutMissionInput>
  }

  export type MissionCompletionCreateManyMissionInputEnvelope = {
    data: MissionCompletionCreateManyMissionInput | MissionCompletionCreateManyMissionInput[]
    skipDuplicates?: boolean
  }

  export type MissionCompletionUpsertWithWhereUniqueWithoutMissionInput = {
    where: MissionCompletionWhereUniqueInput
    update: XOR<MissionCompletionUpdateWithoutMissionInput, MissionCompletionUncheckedUpdateWithoutMissionInput>
    create: XOR<MissionCompletionCreateWithoutMissionInput, MissionCompletionUncheckedCreateWithoutMissionInput>
  }

  export type MissionCompletionUpdateWithWhereUniqueWithoutMissionInput = {
    where: MissionCompletionWhereUniqueInput
    data: XOR<MissionCompletionUpdateWithoutMissionInput, MissionCompletionUncheckedUpdateWithoutMissionInput>
  }

  export type MissionCompletionUpdateManyWithWhereWithoutMissionInput = {
    where: MissionCompletionScalarWhereInput
    data: XOR<MissionCompletionUpdateManyMutationInput, MissionCompletionUncheckedUpdateManyWithoutMissionInput>
  }

  export type MissionCreateWithoutCompletionsInput = {
    title: string
    description: string
    type: $Enums.MissionType
    verificationType: string
    verificationData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MissionUncheckedCreateWithoutCompletionsInput = {
    id?: number
    title: string
    description: string
    type: $Enums.MissionType
    verificationType: string
    verificationData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MissionCreateOrConnectWithoutCompletionsInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutCompletionsInput, MissionUncheckedCreateWithoutCompletionsInput>
  }

  export type UserCreateWithoutMissionsInput = {
    email: string
    password: string
    nickname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: BadgeCreateNestedManyWithoutUserInput
    dailyProgress?: DailyWeeklyProgressCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    friends?: FriendCreateNestedManyWithoutUserInput
    surveys?: SurveyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMissionsInput = {
    id?: number
    email: string
    password: string
    nickname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: BadgeUncheckedCreateNestedManyWithoutUserInput
    dailyProgress?: DailyWeeklyProgressUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    surveys?: SurveyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMissionsInput, UserUncheckedCreateWithoutMissionsInput>
  }

  export type MissionVerificationCreateWithoutMissionCompletionInput = {
    type: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MissionVerificationUncheckedCreateWithoutMissionCompletionInput = {
    id?: number
    type: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MissionVerificationCreateOrConnectWithoutMissionCompletionInput = {
    where: MissionVerificationWhereUniqueInput
    create: XOR<MissionVerificationCreateWithoutMissionCompletionInput, MissionVerificationUncheckedCreateWithoutMissionCompletionInput>
  }

  export type MissionVerificationCreateManyMissionCompletionInputEnvelope = {
    data: MissionVerificationCreateManyMissionCompletionInput | MissionVerificationCreateManyMissionCompletionInput[]
    skipDuplicates?: boolean
  }

  export type MissionUpsertWithoutCompletionsInput = {
    update: XOR<MissionUpdateWithoutCompletionsInput, MissionUncheckedUpdateWithoutCompletionsInput>
    create: XOR<MissionCreateWithoutCompletionsInput, MissionUncheckedCreateWithoutCompletionsInput>
    where?: MissionWhereInput
  }

  export type MissionUpdateToOneWithWhereWithoutCompletionsInput = {
    where?: MissionWhereInput
    data: XOR<MissionUpdateWithoutCompletionsInput, MissionUncheckedUpdateWithoutCompletionsInput>
  }

  export type MissionUpdateWithoutCompletionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    verificationType?: StringFieldUpdateOperationsInput | string
    verificationData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionUncheckedUpdateWithoutCompletionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    verificationType?: StringFieldUpdateOperationsInput | string
    verificationData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutMissionsInput = {
    update: XOR<UserUpdateWithoutMissionsInput, UserUncheckedUpdateWithoutMissionsInput>
    create: XOR<UserCreateWithoutMissionsInput, UserUncheckedCreateWithoutMissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMissionsInput, UserUncheckedUpdateWithoutMissionsInput>
  }

  export type UserUpdateWithoutMissionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: BadgeUpdateManyWithoutUserNestedInput
    dailyProgress?: DailyWeeklyProgressUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    friends?: FriendUpdateManyWithoutUserNestedInput
    surveys?: SurveyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: BadgeUncheckedUpdateManyWithoutUserNestedInput
    dailyProgress?: DailyWeeklyProgressUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    surveys?: SurveyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MissionVerificationUpsertWithWhereUniqueWithoutMissionCompletionInput = {
    where: MissionVerificationWhereUniqueInput
    update: XOR<MissionVerificationUpdateWithoutMissionCompletionInput, MissionVerificationUncheckedUpdateWithoutMissionCompletionInput>
    create: XOR<MissionVerificationCreateWithoutMissionCompletionInput, MissionVerificationUncheckedCreateWithoutMissionCompletionInput>
  }

  export type MissionVerificationUpdateWithWhereUniqueWithoutMissionCompletionInput = {
    where: MissionVerificationWhereUniqueInput
    data: XOR<MissionVerificationUpdateWithoutMissionCompletionInput, MissionVerificationUncheckedUpdateWithoutMissionCompletionInput>
  }

  export type MissionVerificationUpdateManyWithWhereWithoutMissionCompletionInput = {
    where: MissionVerificationScalarWhereInput
    data: XOR<MissionVerificationUpdateManyMutationInput, MissionVerificationUncheckedUpdateManyWithoutMissionCompletionInput>
  }

  export type MissionVerificationScalarWhereInput = {
    AND?: MissionVerificationScalarWhereInput | MissionVerificationScalarWhereInput[]
    OR?: MissionVerificationScalarWhereInput[]
    NOT?: MissionVerificationScalarWhereInput | MissionVerificationScalarWhereInput[]
    id?: IntFilter<"MissionVerification"> | number
    missionCompletionId?: IntFilter<"MissionVerification"> | number
    type?: StringFilter<"MissionVerification"> | string
    data?: JsonFilter<"MissionVerification">
    createdAt?: DateTimeFilter<"MissionVerification"> | Date | string
  }

  export type MissionCompletionCreateWithoutVerificationsInput = {
    completedAt?: Date | string
    verificationData: JsonNullValueInput | InputJsonValue
    status: $Enums.MissionStatus
    feedback?: string | null
    mission: MissionCreateNestedOneWithoutCompletionsInput
    user: UserCreateNestedOneWithoutMissionsInput
  }

  export type MissionCompletionUncheckedCreateWithoutVerificationsInput = {
    id?: number
    userId: number
    missionId: number
    completedAt?: Date | string
    verificationData: JsonNullValueInput | InputJsonValue
    status: $Enums.MissionStatus
    feedback?: string | null
  }

  export type MissionCompletionCreateOrConnectWithoutVerificationsInput = {
    where: MissionCompletionWhereUniqueInput
    create: XOR<MissionCompletionCreateWithoutVerificationsInput, MissionCompletionUncheckedCreateWithoutVerificationsInput>
  }

  export type MissionCompletionUpsertWithoutVerificationsInput = {
    update: XOR<MissionCompletionUpdateWithoutVerificationsInput, MissionCompletionUncheckedUpdateWithoutVerificationsInput>
    create: XOR<MissionCompletionCreateWithoutVerificationsInput, MissionCompletionUncheckedCreateWithoutVerificationsInput>
    where?: MissionCompletionWhereInput
  }

  export type MissionCompletionUpdateToOneWithWhereWithoutVerificationsInput = {
    where?: MissionCompletionWhereInput
    data: XOR<MissionCompletionUpdateWithoutVerificationsInput, MissionCompletionUncheckedUpdateWithoutVerificationsInput>
  }

  export type MissionCompletionUpdateWithoutVerificationsInput = {
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationData?: JsonNullValueInput | InputJsonValue
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    mission?: MissionUpdateOneRequiredWithoutCompletionsNestedInput
    user?: UserUpdateOneRequiredWithoutMissionsNestedInput
  }

  export type MissionCompletionUncheckedUpdateWithoutVerificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    missionId?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationData?: JsonNullValueInput | InputJsonValue
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutBadgesInput = {
    email: string
    password: string
    nickname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyProgress?: DailyWeeklyProgressCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    friends?: FriendCreateNestedManyWithoutUserInput
    missions?: MissionCompletionCreateNestedManyWithoutUserInput
    surveys?: SurveyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBadgesInput = {
    id?: number
    email: string
    password: string
    nickname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyProgress?: DailyWeeklyProgressUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    missions?: MissionCompletionUncheckedCreateNestedManyWithoutUserInput
    surveys?: SurveyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBadgesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
  }

  export type UserUpsertWithoutBadgesInput = {
    update: XOR<UserUpdateWithoutBadgesInput, UserUncheckedUpdateWithoutBadgesInput>
    create: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBadgesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBadgesInput, UserUncheckedUpdateWithoutBadgesInput>
  }

  export type UserUpdateWithoutBadgesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyProgress?: DailyWeeklyProgressUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    friends?: FriendUpdateManyWithoutUserNestedInput
    missions?: MissionCompletionUpdateManyWithoutUserNestedInput
    surveys?: SurveyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBadgesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyProgress?: DailyWeeklyProgressUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    missions?: MissionCompletionUncheckedUpdateManyWithoutUserNestedInput
    surveys?: SurveyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFriendOfInput = {
    email: string
    password: string
    nickname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: BadgeCreateNestedManyWithoutUserInput
    dailyProgress?: DailyWeeklyProgressCreateNestedManyWithoutUserInput
    friends?: FriendCreateNestedManyWithoutUserInput
    missions?: MissionCompletionCreateNestedManyWithoutUserInput
    surveys?: SurveyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFriendOfInput = {
    id?: number
    email: string
    password: string
    nickname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: BadgeUncheckedCreateNestedManyWithoutUserInput
    dailyProgress?: DailyWeeklyProgressUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    missions?: MissionCompletionUncheckedCreateNestedManyWithoutUserInput
    surveys?: SurveyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFriendOfInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
  }

  export type UserCreateWithoutFriendsInput = {
    email: string
    password: string
    nickname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: BadgeCreateNestedManyWithoutUserInput
    dailyProgress?: DailyWeeklyProgressCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    missions?: MissionCompletionCreateNestedManyWithoutUserInput
    surveys?: SurveyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFriendsInput = {
    id?: number
    email: string
    password: string
    nickname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: BadgeUncheckedCreateNestedManyWithoutUserInput
    dailyProgress?: DailyWeeklyProgressUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    missions?: MissionCompletionUncheckedCreateNestedManyWithoutUserInput
    surveys?: SurveyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFriendsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
  }

  export type UserUpsertWithoutFriendOfInput = {
    update: XOR<UserUpdateWithoutFriendOfInput, UserUncheckedUpdateWithoutFriendOfInput>
    create: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendOfInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendOfInput, UserUncheckedUpdateWithoutFriendOfInput>
  }

  export type UserUpdateWithoutFriendOfInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: BadgeUpdateManyWithoutUserNestedInput
    dailyProgress?: DailyWeeklyProgressUpdateManyWithoutUserNestedInput
    friends?: FriendUpdateManyWithoutUserNestedInput
    missions?: MissionCompletionUpdateManyWithoutUserNestedInput
    surveys?: SurveyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendOfInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: BadgeUncheckedUpdateManyWithoutUserNestedInput
    dailyProgress?: DailyWeeklyProgressUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    missions?: MissionCompletionUncheckedUpdateManyWithoutUserNestedInput
    surveys?: SurveyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutFriendsInput = {
    update: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
  }

  export type UserUpdateWithoutFriendsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: BadgeUpdateManyWithoutUserNestedInput
    dailyProgress?: DailyWeeklyProgressUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    missions?: MissionCompletionUpdateManyWithoutUserNestedInput
    surveys?: SurveyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: BadgeUncheckedUpdateManyWithoutUserNestedInput
    dailyProgress?: DailyWeeklyProgressUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    missions?: MissionCompletionUncheckedUpdateManyWithoutUserNestedInput
    surveys?: SurveyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDailyProgressInput = {
    email: string
    password: string
    nickname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: BadgeCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    friends?: FriendCreateNestedManyWithoutUserInput
    missions?: MissionCompletionCreateNestedManyWithoutUserInput
    surveys?: SurveyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDailyProgressInput = {
    id?: number
    email: string
    password: string
    nickname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: BadgeUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    missions?: MissionCompletionUncheckedCreateNestedManyWithoutUserInput
    surveys?: SurveyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDailyProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyProgressInput, UserUncheckedCreateWithoutDailyProgressInput>
  }

  export type UserUpsertWithoutDailyProgressInput = {
    update: XOR<UserUpdateWithoutDailyProgressInput, UserUncheckedUpdateWithoutDailyProgressInput>
    create: XOR<UserCreateWithoutDailyProgressInput, UserUncheckedCreateWithoutDailyProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyProgressInput, UserUncheckedUpdateWithoutDailyProgressInput>
  }

  export type UserUpdateWithoutDailyProgressInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: BadgeUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    friends?: FriendUpdateManyWithoutUserNestedInput
    missions?: MissionCompletionUpdateManyWithoutUserNestedInput
    surveys?: SurveyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: BadgeUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    missions?: MissionCompletionUncheckedUpdateManyWithoutUserNestedInput
    surveys?: SurveyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BadgeCreateManyUserInput = {
    id?: number
    name: string
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type DailyWeeklyProgressCreateManyUserInput = {
    id?: number
    date: Date | string
    type: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FriendCreateManyFriendInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type FriendCreateManyUserInput = {
    id?: number
    friendId: number
    createdAt?: Date | string
  }

  export type MissionCompletionCreateManyUserInput = {
    id?: number
    missionId: number
    completedAt?: Date | string
    verificationData: JsonNullValueInput | InputJsonValue
    status: $Enums.MissionStatus
    feedback?: string | null
  }

  export type SurveyCreateManyUserInput = {
    id?: number
    age: number
    gender: string
    answers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type BadgeUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyWeeklyProgressUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyWeeklyProgressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyWeeklyProgressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendUpdateWithoutFriendInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFriendsNestedInput
  }

  export type FriendUncheckedUpdateWithoutFriendInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendUncheckedUpdateManyWithoutFriendInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friend?: UserUpdateOneRequiredWithoutFriendOfNestedInput
  }

  export type FriendUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionCompletionUpdateWithoutUserInput = {
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationData?: JsonNullValueInput | InputJsonValue
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    mission?: MissionUpdateOneRequiredWithoutCompletionsNestedInput
    verifications?: MissionVerificationUpdateManyWithoutMissionCompletionNestedInput
  }

  export type MissionCompletionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    missionId?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationData?: JsonNullValueInput | InputJsonValue
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    verifications?: MissionVerificationUncheckedUpdateManyWithoutMissionCompletionNestedInput
  }

  export type MissionCompletionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    missionId?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationData?: JsonNullValueInput | InputJsonValue
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SurveyUpdateWithoutUserInput = {
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    answers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    answers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    answers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionCompletionCreateManyMissionInput = {
    id?: number
    userId: number
    completedAt?: Date | string
    verificationData: JsonNullValueInput | InputJsonValue
    status: $Enums.MissionStatus
    feedback?: string | null
  }

  export type MissionCompletionUpdateWithoutMissionInput = {
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationData?: JsonNullValueInput | InputJsonValue
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutMissionsNestedInput
    verifications?: MissionVerificationUpdateManyWithoutMissionCompletionNestedInput
  }

  export type MissionCompletionUncheckedUpdateWithoutMissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationData?: JsonNullValueInput | InputJsonValue
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    verifications?: MissionVerificationUncheckedUpdateManyWithoutMissionCompletionNestedInput
  }

  export type MissionCompletionUncheckedUpdateManyWithoutMissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationData?: JsonNullValueInput | InputJsonValue
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MissionVerificationCreateManyMissionCompletionInput = {
    id?: number
    type: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MissionVerificationUpdateWithoutMissionCompletionInput = {
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionVerificationUncheckedUpdateWithoutMissionCompletionInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionVerificationUncheckedUpdateManyWithoutMissionCompletionInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}