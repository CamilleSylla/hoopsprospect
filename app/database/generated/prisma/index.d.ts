
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
 * Model UserProfileType
 * 
 */
export type UserProfileType = $Result.DefaultSelection<Prisma.$UserProfileTypePayload>
/**
 * Model UserAccessLevel
 * 
 */
export type UserAccessLevel = $Result.DefaultSelection<Prisma.$UserAccessLevelPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserAccessLevelLabel: {
  ADMIN: 'ADMIN',
  VIEWER: 'VIEWER'
};

export type UserAccessLevelLabel = (typeof UserAccessLevelLabel)[keyof typeof UserAccessLevelLabel]


export const UserProfileTypeLabel: {
  PLAYER: 'PLAYER',
  RECRUITER: 'RECRUITER'
};

export type UserProfileTypeLabel = (typeof UserProfileTypeLabel)[keyof typeof UserProfileTypeLabel]

}

export type UserAccessLevelLabel = $Enums.UserAccessLevelLabel

export const UserAccessLevelLabel: typeof $Enums.UserAccessLevelLabel

export type UserProfileTypeLabel = $Enums.UserProfileTypeLabel

export const UserProfileTypeLabel: typeof $Enums.UserProfileTypeLabel

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
   * `prisma.userProfileType`: Exposes CRUD operations for the **UserProfileType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfileTypes
    * const userProfileTypes = await prisma.userProfileType.findMany()
    * ```
    */
  get userProfileType(): Prisma.UserProfileTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAccessLevel`: Exposes CRUD operations for the **UserAccessLevel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAccessLevels
    * const userAccessLevels = await prisma.userAccessLevel.findMany()
    * ```
    */
  get userAccessLevel(): Prisma.UserAccessLevelDelegate<ExtArgs, ClientOptions>;
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
    UserProfileType: 'UserProfileType',
    UserAccessLevel: 'UserAccessLevel'
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
      modelProps: "user" | "userProfileType" | "userAccessLevel"
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      UserProfileType: {
        payload: Prisma.$UserProfileTypePayload<ExtArgs>
        fields: Prisma.UserProfileTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileTypePayload>
          }
          findFirst: {
            args: Prisma.UserProfileTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileTypePayload>
          }
          findMany: {
            args: Prisma.UserProfileTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileTypePayload>[]
          }
          create: {
            args: Prisma.UserProfileTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileTypePayload>
          }
          createMany: {
            args: Prisma.UserProfileTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileTypePayload>[]
          }
          delete: {
            args: Prisma.UserProfileTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileTypePayload>
          }
          update: {
            args: Prisma.UserProfileTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileTypePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileTypePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileTypePayload>
          }
          aggregate: {
            args: Prisma.UserProfileTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfileType>
          }
          groupBy: {
            args: Prisma.UserProfileTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileTypeCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileTypeCountAggregateOutputType> | number
          }
        }
      }
      UserAccessLevel: {
        payload: Prisma.$UserAccessLevelPayload<ExtArgs>
        fields: Prisma.UserAccessLevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAccessLevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessLevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAccessLevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessLevelPayload>
          }
          findFirst: {
            args: Prisma.UserAccessLevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessLevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAccessLevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessLevelPayload>
          }
          findMany: {
            args: Prisma.UserAccessLevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessLevelPayload>[]
          }
          create: {
            args: Prisma.UserAccessLevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessLevelPayload>
          }
          createMany: {
            args: Prisma.UserAccessLevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAccessLevelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessLevelPayload>[]
          }
          delete: {
            args: Prisma.UserAccessLevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessLevelPayload>
          }
          update: {
            args: Prisma.UserAccessLevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessLevelPayload>
          }
          deleteMany: {
            args: Prisma.UserAccessLevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAccessLevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAccessLevelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessLevelPayload>[]
          }
          upsert: {
            args: Prisma.UserAccessLevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessLevelPayload>
          }
          aggregate: {
            args: Prisma.UserAccessLevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAccessLevel>
          }
          groupBy: {
            args: Prisma.UserAccessLevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAccessLevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAccessLevelCountArgs<ExtArgs>
            result: $Utils.Optional<UserAccessLevelCountAggregateOutputType> | number
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
    userProfileType?: UserProfileTypeOmit
    userAccessLevel?: UserAccessLevelOmit
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
   * Count Type UserProfileTypeCountOutputType
   */

  export type UserProfileTypeCountOutputType = {
    users: number
  }

  export type UserProfileTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserProfileTypeCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * UserProfileTypeCountOutputType without action
   */
  export type UserProfileTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileTypeCountOutputType
     */
    select?: UserProfileTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserProfileTypeCountOutputType without action
   */
  export type UserProfileTypeCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserAccessLevelCountOutputType
   */

  export type UserAccessLevelCountOutputType = {
    users: number
  }

  export type UserAccessLevelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserAccessLevelCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * UserAccessLevelCountOutputType without action
   */
  export type UserAccessLevelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessLevelCountOutputType
     */
    select?: UserAccessLevelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserAccessLevelCountOutputType without action
   */
  export type UserAccessLevelCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
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
    user_profile_type_id: number | null
    user_access_level_id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    user_profile_type_id: number | null
    user_access_level_id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    user_profile_type_id: number | null
    user_access_level_id: number | null
    firstname: string | null
    lastname: string | null
    date_of_birth: Date | null
    created_at: Date | null
    update_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    user_profile_type_id: number | null
    user_access_level_id: number | null
    firstname: string | null
    lastname: string | null
    date_of_birth: Date | null
    created_at: Date | null
    update_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    user_profile_type_id: number
    user_access_level_id: number
    firstname: number
    lastname: number
    date_of_birth: number
    created_at: number
    update_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    user_profile_type_id?: true
    user_access_level_id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    user_profile_type_id?: true
    user_access_level_id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    user_profile_type_id?: true
    user_access_level_id?: true
    firstname?: true
    lastname?: true
    date_of_birth?: true
    created_at?: true
    update_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    user_profile_type_id?: true
    user_access_level_id?: true
    firstname?: true
    lastname?: true
    date_of_birth?: true
    created_at?: true
    update_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    user_profile_type_id?: true
    user_access_level_id?: true
    firstname?: true
    lastname?: true
    date_of_birth?: true
    created_at?: true
    update_at?: true
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
    user_profile_type_id: number
    user_access_level_id: number
    firstname: string
    lastname: string
    date_of_birth: Date
    created_at: Date
    update_at: Date
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
    user_profile_type_id?: boolean
    user_access_level_id?: boolean
    firstname?: boolean
    lastname?: boolean
    date_of_birth?: boolean
    created_at?: boolean
    update_at?: boolean
    profile_type?: boolean | UserProfileTypeDefaultArgs<ExtArgs>
    access_level?: boolean | UserAccessLevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    user_profile_type_id?: boolean
    user_access_level_id?: boolean
    firstname?: boolean
    lastname?: boolean
    date_of_birth?: boolean
    created_at?: boolean
    update_at?: boolean
    profile_type?: boolean | UserProfileTypeDefaultArgs<ExtArgs>
    access_level?: boolean | UserAccessLevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    user_profile_type_id?: boolean
    user_access_level_id?: boolean
    firstname?: boolean
    lastname?: boolean
    date_of_birth?: boolean
    created_at?: boolean
    update_at?: boolean
    profile_type?: boolean | UserProfileTypeDefaultArgs<ExtArgs>
    access_level?: boolean | UserAccessLevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    user_profile_type_id?: boolean
    user_access_level_id?: boolean
    firstname?: boolean
    lastname?: boolean
    date_of_birth?: boolean
    created_at?: boolean
    update_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "user_profile_type_id" | "user_access_level_id" | "firstname" | "lastname" | "date_of_birth" | "created_at" | "update_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile_type?: boolean | UserProfileTypeDefaultArgs<ExtArgs>
    access_level?: boolean | UserAccessLevelDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile_type?: boolean | UserProfileTypeDefaultArgs<ExtArgs>
    access_level?: boolean | UserAccessLevelDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile_type?: boolean | UserProfileTypeDefaultArgs<ExtArgs>
    access_level?: boolean | UserAccessLevelDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile_type: Prisma.$UserProfileTypePayload<ExtArgs>
      access_level: Prisma.$UserAccessLevelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      user_profile_type_id: number
      user_access_level_id: number
      firstname: string
      lastname: string
      date_of_birth: Date
      created_at: Date
      update_at: Date
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    profile_type<T extends UserProfileTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileTypeDefaultArgs<ExtArgs>>): Prisma__UserProfileTypeClient<$Result.GetResult<Prisma.$UserProfileTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    access_level<T extends UserAccessLevelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserAccessLevelDefaultArgs<ExtArgs>>): Prisma__UserAccessLevelClient<$Result.GetResult<Prisma.$UserAccessLevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly user_profile_type_id: FieldRef<"User", 'Int'>
    readonly user_access_level_id: FieldRef<"User", 'Int'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly date_of_birth: FieldRef<"User", 'DateTime'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly update_at: FieldRef<"User", 'DateTime'>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * Model UserProfileType
   */

  export type AggregateUserProfileType = {
    _count: UserProfileTypeCountAggregateOutputType | null
    _avg: UserProfileTypeAvgAggregateOutputType | null
    _sum: UserProfileTypeSumAggregateOutputType | null
    _min: UserProfileTypeMinAggregateOutputType | null
    _max: UserProfileTypeMaxAggregateOutputType | null
  }

  export type UserProfileTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type UserProfileTypeSumAggregateOutputType = {
    id: number | null
  }

  export type UserProfileTypeMinAggregateOutputType = {
    id: number | null
    label: $Enums.UserProfileTypeLabel | null
  }

  export type UserProfileTypeMaxAggregateOutputType = {
    id: number | null
    label: $Enums.UserProfileTypeLabel | null
  }

  export type UserProfileTypeCountAggregateOutputType = {
    id: number
    label: number
    _all: number
  }


  export type UserProfileTypeAvgAggregateInputType = {
    id?: true
  }

  export type UserProfileTypeSumAggregateInputType = {
    id?: true
  }

  export type UserProfileTypeMinAggregateInputType = {
    id?: true
    label?: true
  }

  export type UserProfileTypeMaxAggregateInputType = {
    id?: true
    label?: true
  }

  export type UserProfileTypeCountAggregateInputType = {
    id?: true
    label?: true
    _all?: true
  }

  export type UserProfileTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfileType to aggregate.
     */
    where?: UserProfileTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfileTypes to fetch.
     */
    orderBy?: UserProfileTypeOrderByWithRelationInput | UserProfileTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfileTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfileTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfileTypes
    **/
    _count?: true | UserProfileTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileTypeMaxAggregateInputType
  }

  export type GetUserProfileTypeAggregateType<T extends UserProfileTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfileType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfileType[P]>
      : GetScalarType<T[P], AggregateUserProfileType[P]>
  }




  export type UserProfileTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileTypeWhereInput
    orderBy?: UserProfileTypeOrderByWithAggregationInput | UserProfileTypeOrderByWithAggregationInput[]
    by: UserProfileTypeScalarFieldEnum[] | UserProfileTypeScalarFieldEnum
    having?: UserProfileTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileTypeCountAggregateInputType | true
    _avg?: UserProfileTypeAvgAggregateInputType
    _sum?: UserProfileTypeSumAggregateInputType
    _min?: UserProfileTypeMinAggregateInputType
    _max?: UserProfileTypeMaxAggregateInputType
  }

  export type UserProfileTypeGroupByOutputType = {
    id: number
    label: $Enums.UserProfileTypeLabel
    _count: UserProfileTypeCountAggregateOutputType | null
    _avg: UserProfileTypeAvgAggregateOutputType | null
    _sum: UserProfileTypeSumAggregateOutputType | null
    _min: UserProfileTypeMinAggregateOutputType | null
    _max: UserProfileTypeMaxAggregateOutputType | null
  }

  type GetUserProfileTypeGroupByPayload<T extends UserProfileTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileTypeGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileTypeGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    users?: boolean | UserProfileType$usersArgs<ExtArgs>
    _count?: boolean | UserProfileTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfileType"]>

  export type UserProfileTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
  }, ExtArgs["result"]["userProfileType"]>

  export type UserProfileTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
  }, ExtArgs["result"]["userProfileType"]>

  export type UserProfileTypeSelectScalar = {
    id?: boolean
    label?: boolean
  }

  export type UserProfileTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label", ExtArgs["result"]["userProfileType"]>
  export type UserProfileTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserProfileType$usersArgs<ExtArgs>
    _count?: boolean | UserProfileTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserProfileTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserProfileTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserProfileTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfileType"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: $Enums.UserProfileTypeLabel
    }, ExtArgs["result"]["userProfileType"]>
    composites: {}
  }

  type UserProfileTypeGetPayload<S extends boolean | null | undefined | UserProfileTypeDefaultArgs> = $Result.GetResult<Prisma.$UserProfileTypePayload, S>

  type UserProfileTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileTypeCountAggregateInputType | true
    }

  export interface UserProfileTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfileType'], meta: { name: 'UserProfileType' } }
    /**
     * Find zero or one UserProfileType that matches the filter.
     * @param {UserProfileTypeFindUniqueArgs} args - Arguments to find a UserProfileType
     * @example
     * // Get one UserProfileType
     * const userProfileType = await prisma.userProfileType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileTypeFindUniqueArgs>(args: SelectSubset<T, UserProfileTypeFindUniqueArgs<ExtArgs>>): Prisma__UserProfileTypeClient<$Result.GetResult<Prisma.$UserProfileTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfileType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileTypeFindUniqueOrThrowArgs} args - Arguments to find a UserProfileType
     * @example
     * // Get one UserProfileType
     * const userProfileType = await prisma.userProfileType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileTypeClient<$Result.GetResult<Prisma.$UserProfileTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfileType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileTypeFindFirstArgs} args - Arguments to find a UserProfileType
     * @example
     * // Get one UserProfileType
     * const userProfileType = await prisma.userProfileType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileTypeFindFirstArgs>(args?: SelectSubset<T, UserProfileTypeFindFirstArgs<ExtArgs>>): Prisma__UserProfileTypeClient<$Result.GetResult<Prisma.$UserProfileTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfileType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileTypeFindFirstOrThrowArgs} args - Arguments to find a UserProfileType
     * @example
     * // Get one UserProfileType
     * const userProfileType = await prisma.userProfileType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileTypeClient<$Result.GetResult<Prisma.$UserProfileTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfileTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfileTypes
     * const userProfileTypes = await prisma.userProfileType.findMany()
     * 
     * // Get first 10 UserProfileTypes
     * const userProfileTypes = await prisma.userProfileType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileTypeWithIdOnly = await prisma.userProfileType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileTypeFindManyArgs>(args?: SelectSubset<T, UserProfileTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfileTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfileType.
     * @param {UserProfileTypeCreateArgs} args - Arguments to create a UserProfileType.
     * @example
     * // Create one UserProfileType
     * const UserProfileType = await prisma.userProfileType.create({
     *   data: {
     *     // ... data to create a UserProfileType
     *   }
     * })
     * 
     */
    create<T extends UserProfileTypeCreateArgs>(args: SelectSubset<T, UserProfileTypeCreateArgs<ExtArgs>>): Prisma__UserProfileTypeClient<$Result.GetResult<Prisma.$UserProfileTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfileTypes.
     * @param {UserProfileTypeCreateManyArgs} args - Arguments to create many UserProfileTypes.
     * @example
     * // Create many UserProfileTypes
     * const userProfileType = await prisma.userProfileType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileTypeCreateManyArgs>(args?: SelectSubset<T, UserProfileTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfileTypes and returns the data saved in the database.
     * @param {UserProfileTypeCreateManyAndReturnArgs} args - Arguments to create many UserProfileTypes.
     * @example
     * // Create many UserProfileTypes
     * const userProfileType = await prisma.userProfileType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfileTypes and only return the `id`
     * const userProfileTypeWithIdOnly = await prisma.userProfileType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfileTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfileType.
     * @param {UserProfileTypeDeleteArgs} args - Arguments to delete one UserProfileType.
     * @example
     * // Delete one UserProfileType
     * const UserProfileType = await prisma.userProfileType.delete({
     *   where: {
     *     // ... filter to delete one UserProfileType
     *   }
     * })
     * 
     */
    delete<T extends UserProfileTypeDeleteArgs>(args: SelectSubset<T, UserProfileTypeDeleteArgs<ExtArgs>>): Prisma__UserProfileTypeClient<$Result.GetResult<Prisma.$UserProfileTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfileType.
     * @param {UserProfileTypeUpdateArgs} args - Arguments to update one UserProfileType.
     * @example
     * // Update one UserProfileType
     * const userProfileType = await prisma.userProfileType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileTypeUpdateArgs>(args: SelectSubset<T, UserProfileTypeUpdateArgs<ExtArgs>>): Prisma__UserProfileTypeClient<$Result.GetResult<Prisma.$UserProfileTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfileTypes.
     * @param {UserProfileTypeDeleteManyArgs} args - Arguments to filter UserProfileTypes to delete.
     * @example
     * // Delete a few UserProfileTypes
     * const { count } = await prisma.userProfileType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileTypeDeleteManyArgs>(args?: SelectSubset<T, UserProfileTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfileTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfileTypes
     * const userProfileType = await prisma.userProfileType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileTypeUpdateManyArgs>(args: SelectSubset<T, UserProfileTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfileTypes and returns the data updated in the database.
     * @param {UserProfileTypeUpdateManyAndReturnArgs} args - Arguments to update many UserProfileTypes.
     * @example
     * // Update many UserProfileTypes
     * const userProfileType = await prisma.userProfileType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfileTypes and only return the `id`
     * const userProfileTypeWithIdOnly = await prisma.userProfileType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfileTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfileTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfileType.
     * @param {UserProfileTypeUpsertArgs} args - Arguments to update or create a UserProfileType.
     * @example
     * // Update or create a UserProfileType
     * const userProfileType = await prisma.userProfileType.upsert({
     *   create: {
     *     // ... data to create a UserProfileType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfileType we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileTypeUpsertArgs>(args: SelectSubset<T, UserProfileTypeUpsertArgs<ExtArgs>>): Prisma__UserProfileTypeClient<$Result.GetResult<Prisma.$UserProfileTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfileTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileTypeCountArgs} args - Arguments to filter UserProfileTypes to count.
     * @example
     * // Count the number of UserProfileTypes
     * const count = await prisma.userProfileType.count({
     *   where: {
     *     // ... the filter for the UserProfileTypes we want to count
     *   }
     * })
    **/
    count<T extends UserProfileTypeCountArgs>(
      args?: Subset<T, UserProfileTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfileType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileTypeAggregateArgs>(args: Subset<T, UserProfileTypeAggregateArgs>): Prisma.PrismaPromise<GetUserProfileTypeAggregateType<T>>

    /**
     * Group by UserProfileType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileTypeGroupByArgs} args - Group by arguments.
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
      T extends UserProfileTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileTypeGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfileType model
   */
  readonly fields: UserProfileTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfileType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UserProfileType$usersArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileType$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserProfileType model
   */
  interface UserProfileTypeFieldRefs {
    readonly id: FieldRef<"UserProfileType", 'Int'>
    readonly label: FieldRef<"UserProfileType", 'UserProfileTypeLabel'>
  }
    

  // Custom InputTypes
  /**
   * UserProfileType findUnique
   */
  export type UserProfileTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileType
     */
    select?: UserProfileTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileType
     */
    omit?: UserProfileTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileTypeInclude<ExtArgs> | null
    /**
     * Filter, which UserProfileType to fetch.
     */
    where: UserProfileTypeWhereUniqueInput
  }

  /**
   * UserProfileType findUniqueOrThrow
   */
  export type UserProfileTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileType
     */
    select?: UserProfileTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileType
     */
    omit?: UserProfileTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileTypeInclude<ExtArgs> | null
    /**
     * Filter, which UserProfileType to fetch.
     */
    where: UserProfileTypeWhereUniqueInput
  }

  /**
   * UserProfileType findFirst
   */
  export type UserProfileTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileType
     */
    select?: UserProfileTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileType
     */
    omit?: UserProfileTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileTypeInclude<ExtArgs> | null
    /**
     * Filter, which UserProfileType to fetch.
     */
    where?: UserProfileTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfileTypes to fetch.
     */
    orderBy?: UserProfileTypeOrderByWithRelationInput | UserProfileTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfileTypes.
     */
    cursor?: UserProfileTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfileTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfileTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfileTypes.
     */
    distinct?: UserProfileTypeScalarFieldEnum | UserProfileTypeScalarFieldEnum[]
  }

  /**
   * UserProfileType findFirstOrThrow
   */
  export type UserProfileTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileType
     */
    select?: UserProfileTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileType
     */
    omit?: UserProfileTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileTypeInclude<ExtArgs> | null
    /**
     * Filter, which UserProfileType to fetch.
     */
    where?: UserProfileTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfileTypes to fetch.
     */
    orderBy?: UserProfileTypeOrderByWithRelationInput | UserProfileTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfileTypes.
     */
    cursor?: UserProfileTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfileTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfileTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfileTypes.
     */
    distinct?: UserProfileTypeScalarFieldEnum | UserProfileTypeScalarFieldEnum[]
  }

  /**
   * UserProfileType findMany
   */
  export type UserProfileTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileType
     */
    select?: UserProfileTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileType
     */
    omit?: UserProfileTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileTypeInclude<ExtArgs> | null
    /**
     * Filter, which UserProfileTypes to fetch.
     */
    where?: UserProfileTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfileTypes to fetch.
     */
    orderBy?: UserProfileTypeOrderByWithRelationInput | UserProfileTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfileTypes.
     */
    cursor?: UserProfileTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfileTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfileTypes.
     */
    skip?: number
    distinct?: UserProfileTypeScalarFieldEnum | UserProfileTypeScalarFieldEnum[]
  }

  /**
   * UserProfileType create
   */
  export type UserProfileTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileType
     */
    select?: UserProfileTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileType
     */
    omit?: UserProfileTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfileType.
     */
    data: XOR<UserProfileTypeCreateInput, UserProfileTypeUncheckedCreateInput>
  }

  /**
   * UserProfileType createMany
   */
  export type UserProfileTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfileTypes.
     */
    data: UserProfileTypeCreateManyInput | UserProfileTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfileType createManyAndReturn
   */
  export type UserProfileTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileType
     */
    select?: UserProfileTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileType
     */
    omit?: UserProfileTypeOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfileTypes.
     */
    data: UserProfileTypeCreateManyInput | UserProfileTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfileType update
   */
  export type UserProfileTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileType
     */
    select?: UserProfileTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileType
     */
    omit?: UserProfileTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfileType.
     */
    data: XOR<UserProfileTypeUpdateInput, UserProfileTypeUncheckedUpdateInput>
    /**
     * Choose, which UserProfileType to update.
     */
    where: UserProfileTypeWhereUniqueInput
  }

  /**
   * UserProfileType updateMany
   */
  export type UserProfileTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfileTypes.
     */
    data: XOR<UserProfileTypeUpdateManyMutationInput, UserProfileTypeUncheckedUpdateManyInput>
    /**
     * Filter which UserProfileTypes to update
     */
    where?: UserProfileTypeWhereInput
    /**
     * Limit how many UserProfileTypes to update.
     */
    limit?: number
  }

  /**
   * UserProfileType updateManyAndReturn
   */
  export type UserProfileTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileType
     */
    select?: UserProfileTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileType
     */
    omit?: UserProfileTypeOmit<ExtArgs> | null
    /**
     * The data used to update UserProfileTypes.
     */
    data: XOR<UserProfileTypeUpdateManyMutationInput, UserProfileTypeUncheckedUpdateManyInput>
    /**
     * Filter which UserProfileTypes to update
     */
    where?: UserProfileTypeWhereInput
    /**
     * Limit how many UserProfileTypes to update.
     */
    limit?: number
  }

  /**
   * UserProfileType upsert
   */
  export type UserProfileTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileType
     */
    select?: UserProfileTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileType
     */
    omit?: UserProfileTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfileType to update in case it exists.
     */
    where: UserProfileTypeWhereUniqueInput
    /**
     * In case the UserProfileType found by the `where` argument doesn't exist, create a new UserProfileType with this data.
     */
    create: XOR<UserProfileTypeCreateInput, UserProfileTypeUncheckedCreateInput>
    /**
     * In case the UserProfileType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileTypeUpdateInput, UserProfileTypeUncheckedUpdateInput>
  }

  /**
   * UserProfileType delete
   */
  export type UserProfileTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileType
     */
    select?: UserProfileTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileType
     */
    omit?: UserProfileTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileTypeInclude<ExtArgs> | null
    /**
     * Filter which UserProfileType to delete.
     */
    where: UserProfileTypeWhereUniqueInput
  }

  /**
   * UserProfileType deleteMany
   */
  export type UserProfileTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfileTypes to delete
     */
    where?: UserProfileTypeWhereInput
    /**
     * Limit how many UserProfileTypes to delete.
     */
    limit?: number
  }

  /**
   * UserProfileType.users
   */
  export type UserProfileType$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * UserProfileType without action
   */
  export type UserProfileTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileType
     */
    select?: UserProfileTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileType
     */
    omit?: UserProfileTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileTypeInclude<ExtArgs> | null
  }


  /**
   * Model UserAccessLevel
   */

  export type AggregateUserAccessLevel = {
    _count: UserAccessLevelCountAggregateOutputType | null
    _avg: UserAccessLevelAvgAggregateOutputType | null
    _sum: UserAccessLevelSumAggregateOutputType | null
    _min: UserAccessLevelMinAggregateOutputType | null
    _max: UserAccessLevelMaxAggregateOutputType | null
  }

  export type UserAccessLevelAvgAggregateOutputType = {
    id: number | null
  }

  export type UserAccessLevelSumAggregateOutputType = {
    id: number | null
  }

  export type UserAccessLevelMinAggregateOutputType = {
    id: number | null
    label: $Enums.UserAccessLevelLabel | null
  }

  export type UserAccessLevelMaxAggregateOutputType = {
    id: number | null
    label: $Enums.UserAccessLevelLabel | null
  }

  export type UserAccessLevelCountAggregateOutputType = {
    id: number
    label: number
    _all: number
  }


  export type UserAccessLevelAvgAggregateInputType = {
    id?: true
  }

  export type UserAccessLevelSumAggregateInputType = {
    id?: true
  }

  export type UserAccessLevelMinAggregateInputType = {
    id?: true
    label?: true
  }

  export type UserAccessLevelMaxAggregateInputType = {
    id?: true
    label?: true
  }

  export type UserAccessLevelCountAggregateInputType = {
    id?: true
    label?: true
    _all?: true
  }

  export type UserAccessLevelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAccessLevel to aggregate.
     */
    where?: UserAccessLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAccessLevels to fetch.
     */
    orderBy?: UserAccessLevelOrderByWithRelationInput | UserAccessLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAccessLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAccessLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAccessLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAccessLevels
    **/
    _count?: true | UserAccessLevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAccessLevelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAccessLevelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAccessLevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAccessLevelMaxAggregateInputType
  }

  export type GetUserAccessLevelAggregateType<T extends UserAccessLevelAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAccessLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAccessLevel[P]>
      : GetScalarType<T[P], AggregateUserAccessLevel[P]>
  }




  export type UserAccessLevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAccessLevelWhereInput
    orderBy?: UserAccessLevelOrderByWithAggregationInput | UserAccessLevelOrderByWithAggregationInput[]
    by: UserAccessLevelScalarFieldEnum[] | UserAccessLevelScalarFieldEnum
    having?: UserAccessLevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAccessLevelCountAggregateInputType | true
    _avg?: UserAccessLevelAvgAggregateInputType
    _sum?: UserAccessLevelSumAggregateInputType
    _min?: UserAccessLevelMinAggregateInputType
    _max?: UserAccessLevelMaxAggregateInputType
  }

  export type UserAccessLevelGroupByOutputType = {
    id: number
    label: $Enums.UserAccessLevelLabel
    _count: UserAccessLevelCountAggregateOutputType | null
    _avg: UserAccessLevelAvgAggregateOutputType | null
    _sum: UserAccessLevelSumAggregateOutputType | null
    _min: UserAccessLevelMinAggregateOutputType | null
    _max: UserAccessLevelMaxAggregateOutputType | null
  }

  type GetUserAccessLevelGroupByPayload<T extends UserAccessLevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAccessLevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAccessLevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAccessLevelGroupByOutputType[P]>
            : GetScalarType<T[P], UserAccessLevelGroupByOutputType[P]>
        }
      >
    >


  export type UserAccessLevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    users?: boolean | UserAccessLevel$usersArgs<ExtArgs>
    _count?: boolean | UserAccessLevelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAccessLevel"]>

  export type UserAccessLevelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
  }, ExtArgs["result"]["userAccessLevel"]>

  export type UserAccessLevelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
  }, ExtArgs["result"]["userAccessLevel"]>

  export type UserAccessLevelSelectScalar = {
    id?: boolean
    label?: boolean
  }

  export type UserAccessLevelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label", ExtArgs["result"]["userAccessLevel"]>
  export type UserAccessLevelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserAccessLevel$usersArgs<ExtArgs>
    _count?: boolean | UserAccessLevelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserAccessLevelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserAccessLevelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserAccessLevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAccessLevel"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: $Enums.UserAccessLevelLabel
    }, ExtArgs["result"]["userAccessLevel"]>
    composites: {}
  }

  type UserAccessLevelGetPayload<S extends boolean | null | undefined | UserAccessLevelDefaultArgs> = $Result.GetResult<Prisma.$UserAccessLevelPayload, S>

  type UserAccessLevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAccessLevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAccessLevelCountAggregateInputType | true
    }

  export interface UserAccessLevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAccessLevel'], meta: { name: 'UserAccessLevel' } }
    /**
     * Find zero or one UserAccessLevel that matches the filter.
     * @param {UserAccessLevelFindUniqueArgs} args - Arguments to find a UserAccessLevel
     * @example
     * // Get one UserAccessLevel
     * const userAccessLevel = await prisma.userAccessLevel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAccessLevelFindUniqueArgs>(args: SelectSubset<T, UserAccessLevelFindUniqueArgs<ExtArgs>>): Prisma__UserAccessLevelClient<$Result.GetResult<Prisma.$UserAccessLevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAccessLevel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAccessLevelFindUniqueOrThrowArgs} args - Arguments to find a UserAccessLevel
     * @example
     * // Get one UserAccessLevel
     * const userAccessLevel = await prisma.userAccessLevel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAccessLevelFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAccessLevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAccessLevelClient<$Result.GetResult<Prisma.$UserAccessLevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAccessLevel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessLevelFindFirstArgs} args - Arguments to find a UserAccessLevel
     * @example
     * // Get one UserAccessLevel
     * const userAccessLevel = await prisma.userAccessLevel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAccessLevelFindFirstArgs>(args?: SelectSubset<T, UserAccessLevelFindFirstArgs<ExtArgs>>): Prisma__UserAccessLevelClient<$Result.GetResult<Prisma.$UserAccessLevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAccessLevel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessLevelFindFirstOrThrowArgs} args - Arguments to find a UserAccessLevel
     * @example
     * // Get one UserAccessLevel
     * const userAccessLevel = await prisma.userAccessLevel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAccessLevelFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAccessLevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAccessLevelClient<$Result.GetResult<Prisma.$UserAccessLevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAccessLevels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessLevelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAccessLevels
     * const userAccessLevels = await prisma.userAccessLevel.findMany()
     * 
     * // Get first 10 UserAccessLevels
     * const userAccessLevels = await prisma.userAccessLevel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAccessLevelWithIdOnly = await prisma.userAccessLevel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAccessLevelFindManyArgs>(args?: SelectSubset<T, UserAccessLevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAccessLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAccessLevel.
     * @param {UserAccessLevelCreateArgs} args - Arguments to create a UserAccessLevel.
     * @example
     * // Create one UserAccessLevel
     * const UserAccessLevel = await prisma.userAccessLevel.create({
     *   data: {
     *     // ... data to create a UserAccessLevel
     *   }
     * })
     * 
     */
    create<T extends UserAccessLevelCreateArgs>(args: SelectSubset<T, UserAccessLevelCreateArgs<ExtArgs>>): Prisma__UserAccessLevelClient<$Result.GetResult<Prisma.$UserAccessLevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAccessLevels.
     * @param {UserAccessLevelCreateManyArgs} args - Arguments to create many UserAccessLevels.
     * @example
     * // Create many UserAccessLevels
     * const userAccessLevel = await prisma.userAccessLevel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAccessLevelCreateManyArgs>(args?: SelectSubset<T, UserAccessLevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAccessLevels and returns the data saved in the database.
     * @param {UserAccessLevelCreateManyAndReturnArgs} args - Arguments to create many UserAccessLevels.
     * @example
     * // Create many UserAccessLevels
     * const userAccessLevel = await prisma.userAccessLevel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAccessLevels and only return the `id`
     * const userAccessLevelWithIdOnly = await prisma.userAccessLevel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAccessLevelCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAccessLevelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAccessLevelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAccessLevel.
     * @param {UserAccessLevelDeleteArgs} args - Arguments to delete one UserAccessLevel.
     * @example
     * // Delete one UserAccessLevel
     * const UserAccessLevel = await prisma.userAccessLevel.delete({
     *   where: {
     *     // ... filter to delete one UserAccessLevel
     *   }
     * })
     * 
     */
    delete<T extends UserAccessLevelDeleteArgs>(args: SelectSubset<T, UserAccessLevelDeleteArgs<ExtArgs>>): Prisma__UserAccessLevelClient<$Result.GetResult<Prisma.$UserAccessLevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAccessLevel.
     * @param {UserAccessLevelUpdateArgs} args - Arguments to update one UserAccessLevel.
     * @example
     * // Update one UserAccessLevel
     * const userAccessLevel = await prisma.userAccessLevel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAccessLevelUpdateArgs>(args: SelectSubset<T, UserAccessLevelUpdateArgs<ExtArgs>>): Prisma__UserAccessLevelClient<$Result.GetResult<Prisma.$UserAccessLevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAccessLevels.
     * @param {UserAccessLevelDeleteManyArgs} args - Arguments to filter UserAccessLevels to delete.
     * @example
     * // Delete a few UserAccessLevels
     * const { count } = await prisma.userAccessLevel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAccessLevelDeleteManyArgs>(args?: SelectSubset<T, UserAccessLevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAccessLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessLevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAccessLevels
     * const userAccessLevel = await prisma.userAccessLevel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAccessLevelUpdateManyArgs>(args: SelectSubset<T, UserAccessLevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAccessLevels and returns the data updated in the database.
     * @param {UserAccessLevelUpdateManyAndReturnArgs} args - Arguments to update many UserAccessLevels.
     * @example
     * // Update many UserAccessLevels
     * const userAccessLevel = await prisma.userAccessLevel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAccessLevels and only return the `id`
     * const userAccessLevelWithIdOnly = await prisma.userAccessLevel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserAccessLevelUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAccessLevelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAccessLevelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAccessLevel.
     * @param {UserAccessLevelUpsertArgs} args - Arguments to update or create a UserAccessLevel.
     * @example
     * // Update or create a UserAccessLevel
     * const userAccessLevel = await prisma.userAccessLevel.upsert({
     *   create: {
     *     // ... data to create a UserAccessLevel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAccessLevel we want to update
     *   }
     * })
     */
    upsert<T extends UserAccessLevelUpsertArgs>(args: SelectSubset<T, UserAccessLevelUpsertArgs<ExtArgs>>): Prisma__UserAccessLevelClient<$Result.GetResult<Prisma.$UserAccessLevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAccessLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessLevelCountArgs} args - Arguments to filter UserAccessLevels to count.
     * @example
     * // Count the number of UserAccessLevels
     * const count = await prisma.userAccessLevel.count({
     *   where: {
     *     // ... the filter for the UserAccessLevels we want to count
     *   }
     * })
    **/
    count<T extends UserAccessLevelCountArgs>(
      args?: Subset<T, UserAccessLevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAccessLevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAccessLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessLevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAccessLevelAggregateArgs>(args: Subset<T, UserAccessLevelAggregateArgs>): Prisma.PrismaPromise<GetUserAccessLevelAggregateType<T>>

    /**
     * Group by UserAccessLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessLevelGroupByArgs} args - Group by arguments.
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
      T extends UserAccessLevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAccessLevelGroupByArgs['orderBy'] }
        : { orderBy?: UserAccessLevelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAccessLevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAccessLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAccessLevel model
   */
  readonly fields: UserAccessLevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAccessLevel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAccessLevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UserAccessLevel$usersArgs<ExtArgs> = {}>(args?: Subset<T, UserAccessLevel$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserAccessLevel model
   */
  interface UserAccessLevelFieldRefs {
    readonly id: FieldRef<"UserAccessLevel", 'Int'>
    readonly label: FieldRef<"UserAccessLevel", 'UserAccessLevelLabel'>
  }
    

  // Custom InputTypes
  /**
   * UserAccessLevel findUnique
   */
  export type UserAccessLevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessLevel
     */
    select?: UserAccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessLevel
     */
    omit?: UserAccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessLevelInclude<ExtArgs> | null
    /**
     * Filter, which UserAccessLevel to fetch.
     */
    where: UserAccessLevelWhereUniqueInput
  }

  /**
   * UserAccessLevel findUniqueOrThrow
   */
  export type UserAccessLevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessLevel
     */
    select?: UserAccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessLevel
     */
    omit?: UserAccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessLevelInclude<ExtArgs> | null
    /**
     * Filter, which UserAccessLevel to fetch.
     */
    where: UserAccessLevelWhereUniqueInput
  }

  /**
   * UserAccessLevel findFirst
   */
  export type UserAccessLevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessLevel
     */
    select?: UserAccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessLevel
     */
    omit?: UserAccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessLevelInclude<ExtArgs> | null
    /**
     * Filter, which UserAccessLevel to fetch.
     */
    where?: UserAccessLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAccessLevels to fetch.
     */
    orderBy?: UserAccessLevelOrderByWithRelationInput | UserAccessLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAccessLevels.
     */
    cursor?: UserAccessLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAccessLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAccessLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAccessLevels.
     */
    distinct?: UserAccessLevelScalarFieldEnum | UserAccessLevelScalarFieldEnum[]
  }

  /**
   * UserAccessLevel findFirstOrThrow
   */
  export type UserAccessLevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessLevel
     */
    select?: UserAccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessLevel
     */
    omit?: UserAccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessLevelInclude<ExtArgs> | null
    /**
     * Filter, which UserAccessLevel to fetch.
     */
    where?: UserAccessLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAccessLevels to fetch.
     */
    orderBy?: UserAccessLevelOrderByWithRelationInput | UserAccessLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAccessLevels.
     */
    cursor?: UserAccessLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAccessLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAccessLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAccessLevels.
     */
    distinct?: UserAccessLevelScalarFieldEnum | UserAccessLevelScalarFieldEnum[]
  }

  /**
   * UserAccessLevel findMany
   */
  export type UserAccessLevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessLevel
     */
    select?: UserAccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessLevel
     */
    omit?: UserAccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessLevelInclude<ExtArgs> | null
    /**
     * Filter, which UserAccessLevels to fetch.
     */
    where?: UserAccessLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAccessLevels to fetch.
     */
    orderBy?: UserAccessLevelOrderByWithRelationInput | UserAccessLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAccessLevels.
     */
    cursor?: UserAccessLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAccessLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAccessLevels.
     */
    skip?: number
    distinct?: UserAccessLevelScalarFieldEnum | UserAccessLevelScalarFieldEnum[]
  }

  /**
   * UserAccessLevel create
   */
  export type UserAccessLevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessLevel
     */
    select?: UserAccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessLevel
     */
    omit?: UserAccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessLevelInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAccessLevel.
     */
    data: XOR<UserAccessLevelCreateInput, UserAccessLevelUncheckedCreateInput>
  }

  /**
   * UserAccessLevel createMany
   */
  export type UserAccessLevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAccessLevels.
     */
    data: UserAccessLevelCreateManyInput | UserAccessLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAccessLevel createManyAndReturn
   */
  export type UserAccessLevelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessLevel
     */
    select?: UserAccessLevelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessLevel
     */
    omit?: UserAccessLevelOmit<ExtArgs> | null
    /**
     * The data used to create many UserAccessLevels.
     */
    data: UserAccessLevelCreateManyInput | UserAccessLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAccessLevel update
   */
  export type UserAccessLevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessLevel
     */
    select?: UserAccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessLevel
     */
    omit?: UserAccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessLevelInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAccessLevel.
     */
    data: XOR<UserAccessLevelUpdateInput, UserAccessLevelUncheckedUpdateInput>
    /**
     * Choose, which UserAccessLevel to update.
     */
    where: UserAccessLevelWhereUniqueInput
  }

  /**
   * UserAccessLevel updateMany
   */
  export type UserAccessLevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAccessLevels.
     */
    data: XOR<UserAccessLevelUpdateManyMutationInput, UserAccessLevelUncheckedUpdateManyInput>
    /**
     * Filter which UserAccessLevels to update
     */
    where?: UserAccessLevelWhereInput
    /**
     * Limit how many UserAccessLevels to update.
     */
    limit?: number
  }

  /**
   * UserAccessLevel updateManyAndReturn
   */
  export type UserAccessLevelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessLevel
     */
    select?: UserAccessLevelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessLevel
     */
    omit?: UserAccessLevelOmit<ExtArgs> | null
    /**
     * The data used to update UserAccessLevels.
     */
    data: XOR<UserAccessLevelUpdateManyMutationInput, UserAccessLevelUncheckedUpdateManyInput>
    /**
     * Filter which UserAccessLevels to update
     */
    where?: UserAccessLevelWhereInput
    /**
     * Limit how many UserAccessLevels to update.
     */
    limit?: number
  }

  /**
   * UserAccessLevel upsert
   */
  export type UserAccessLevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessLevel
     */
    select?: UserAccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessLevel
     */
    omit?: UserAccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessLevelInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAccessLevel to update in case it exists.
     */
    where: UserAccessLevelWhereUniqueInput
    /**
     * In case the UserAccessLevel found by the `where` argument doesn't exist, create a new UserAccessLevel with this data.
     */
    create: XOR<UserAccessLevelCreateInput, UserAccessLevelUncheckedCreateInput>
    /**
     * In case the UserAccessLevel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAccessLevelUpdateInput, UserAccessLevelUncheckedUpdateInput>
  }

  /**
   * UserAccessLevel delete
   */
  export type UserAccessLevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessLevel
     */
    select?: UserAccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessLevel
     */
    omit?: UserAccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessLevelInclude<ExtArgs> | null
    /**
     * Filter which UserAccessLevel to delete.
     */
    where: UserAccessLevelWhereUniqueInput
  }

  /**
   * UserAccessLevel deleteMany
   */
  export type UserAccessLevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAccessLevels to delete
     */
    where?: UserAccessLevelWhereInput
    /**
     * Limit how many UserAccessLevels to delete.
     */
    limit?: number
  }

  /**
   * UserAccessLevel.users
   */
  export type UserAccessLevel$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * UserAccessLevel without action
   */
  export type UserAccessLevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessLevel
     */
    select?: UserAccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessLevel
     */
    omit?: UserAccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessLevelInclude<ExtArgs> | null
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
    user_profile_type_id: 'user_profile_type_id',
    user_access_level_id: 'user_access_level_id',
    firstname: 'firstname',
    lastname: 'lastname',
    date_of_birth: 'date_of_birth',
    created_at: 'created_at',
    update_at: 'update_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileTypeScalarFieldEnum: {
    id: 'id',
    label: 'label'
  };

  export type UserProfileTypeScalarFieldEnum = (typeof UserProfileTypeScalarFieldEnum)[keyof typeof UserProfileTypeScalarFieldEnum]


  export const UserAccessLevelScalarFieldEnum: {
    id: 'id',
    label: 'label'
  };

  export type UserAccessLevelScalarFieldEnum = (typeof UserAccessLevelScalarFieldEnum)[keyof typeof UserAccessLevelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserProfileTypeLabel'
   */
  export type EnumUserProfileTypeLabelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserProfileTypeLabel'>
    


  /**
   * Reference to a field of type 'UserProfileTypeLabel[]'
   */
  export type ListEnumUserProfileTypeLabelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserProfileTypeLabel[]'>
    


  /**
   * Reference to a field of type 'UserAccessLevelLabel'
   */
  export type EnumUserAccessLevelLabelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserAccessLevelLabel'>
    


  /**
   * Reference to a field of type 'UserAccessLevelLabel[]'
   */
  export type ListEnumUserAccessLevelLabelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserAccessLevelLabel[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
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
    user_profile_type_id?: IntFilter<"User"> | number
    user_access_level_id?: IntFilter<"User"> | number
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    date_of_birth?: DateTimeFilter<"User"> | Date | string
    created_at?: DateTimeFilter<"User"> | Date | string
    update_at?: DateTimeFilter<"User"> | Date | string
    profile_type?: XOR<UserProfileTypeScalarRelationFilter, UserProfileTypeWhereInput>
    access_level?: XOR<UserAccessLevelScalarRelationFilter, UserAccessLevelWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_profile_type_id?: SortOrder
    user_access_level_id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    date_of_birth?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    profile_type?: UserProfileTypeOrderByWithRelationInput
    access_level?: UserAccessLevelOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    user_profile_type_id?: IntFilter<"User"> | number
    user_access_level_id?: IntFilter<"User"> | number
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    date_of_birth?: DateTimeFilter<"User"> | Date | string
    created_at?: DateTimeFilter<"User"> | Date | string
    update_at?: DateTimeFilter<"User"> | Date | string
    profile_type?: XOR<UserProfileTypeScalarRelationFilter, UserProfileTypeWhereInput>
    access_level?: XOR<UserAccessLevelScalarRelationFilter, UserAccessLevelWhereInput>
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_profile_type_id?: SortOrder
    user_access_level_id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    date_of_birth?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
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
    user_profile_type_id?: IntWithAggregatesFilter<"User"> | number
    user_access_level_id?: IntWithAggregatesFilter<"User"> | number
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    date_of_birth?: DateTimeWithAggregatesFilter<"User"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserProfileTypeWhereInput = {
    AND?: UserProfileTypeWhereInput | UserProfileTypeWhereInput[]
    OR?: UserProfileTypeWhereInput[]
    NOT?: UserProfileTypeWhereInput | UserProfileTypeWhereInput[]
    id?: IntFilter<"UserProfileType"> | number
    label?: EnumUserProfileTypeLabelFilter<"UserProfileType"> | $Enums.UserProfileTypeLabel
    users?: UserListRelationFilter
  }

  export type UserProfileTypeOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type UserProfileTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    label?: $Enums.UserProfileTypeLabel
    AND?: UserProfileTypeWhereInput | UserProfileTypeWhereInput[]
    OR?: UserProfileTypeWhereInput[]
    NOT?: UserProfileTypeWhereInput | UserProfileTypeWhereInput[]
    users?: UserListRelationFilter
  }, "id" | "label">

  export type UserProfileTypeOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    _count?: UserProfileTypeCountOrderByAggregateInput
    _avg?: UserProfileTypeAvgOrderByAggregateInput
    _max?: UserProfileTypeMaxOrderByAggregateInput
    _min?: UserProfileTypeMinOrderByAggregateInput
    _sum?: UserProfileTypeSumOrderByAggregateInput
  }

  export type UserProfileTypeScalarWhereWithAggregatesInput = {
    AND?: UserProfileTypeScalarWhereWithAggregatesInput | UserProfileTypeScalarWhereWithAggregatesInput[]
    OR?: UserProfileTypeScalarWhereWithAggregatesInput[]
    NOT?: UserProfileTypeScalarWhereWithAggregatesInput | UserProfileTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserProfileType"> | number
    label?: EnumUserProfileTypeLabelWithAggregatesFilter<"UserProfileType"> | $Enums.UserProfileTypeLabel
  }

  export type UserAccessLevelWhereInput = {
    AND?: UserAccessLevelWhereInput | UserAccessLevelWhereInput[]
    OR?: UserAccessLevelWhereInput[]
    NOT?: UserAccessLevelWhereInput | UserAccessLevelWhereInput[]
    id?: IntFilter<"UserAccessLevel"> | number
    label?: EnumUserAccessLevelLabelFilter<"UserAccessLevel"> | $Enums.UserAccessLevelLabel
    users?: UserListRelationFilter
  }

  export type UserAccessLevelOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type UserAccessLevelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    label?: $Enums.UserAccessLevelLabel
    AND?: UserAccessLevelWhereInput | UserAccessLevelWhereInput[]
    OR?: UserAccessLevelWhereInput[]
    NOT?: UserAccessLevelWhereInput | UserAccessLevelWhereInput[]
    users?: UserListRelationFilter
  }, "id" | "label">

  export type UserAccessLevelOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    _count?: UserAccessLevelCountOrderByAggregateInput
    _avg?: UserAccessLevelAvgOrderByAggregateInput
    _max?: UserAccessLevelMaxOrderByAggregateInput
    _min?: UserAccessLevelMinOrderByAggregateInput
    _sum?: UserAccessLevelSumOrderByAggregateInput
  }

  export type UserAccessLevelScalarWhereWithAggregatesInput = {
    AND?: UserAccessLevelScalarWhereWithAggregatesInput | UserAccessLevelScalarWhereWithAggregatesInput[]
    OR?: UserAccessLevelScalarWhereWithAggregatesInput[]
    NOT?: UserAccessLevelScalarWhereWithAggregatesInput | UserAccessLevelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserAccessLevel"> | number
    label?: EnumUserAccessLevelLabelWithAggregatesFilter<"UserAccessLevel"> | $Enums.UserAccessLevelLabel
  }

  export type UserCreateInput = {
    email: string
    password: string
    firstname: string
    lastname: string
    date_of_birth: Date | string
    created_at?: Date | string
    update_at?: Date | string
    profile_type: UserProfileTypeCreateNestedOneWithoutUsersInput
    access_level: UserAccessLevelCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    user_profile_type_id: number
    user_access_level_id: number
    firstname: string
    lastname: string
    date_of_birth: Date | string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_type?: UserProfileTypeUpdateOneRequiredWithoutUsersNestedInput
    access_level?: UserAccessLevelUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_profile_type_id?: IntFieldUpdateOperationsInput | number
    user_access_level_id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    user_profile_type_id: number
    user_access_level_id: number
    firstname: string
    lastname: string
    date_of_birth: Date | string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_profile_type_id?: IntFieldUpdateOperationsInput | number
    user_access_level_id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileTypeCreateInput = {
    label: $Enums.UserProfileTypeLabel
    users?: UserCreateNestedManyWithoutProfile_typeInput
  }

  export type UserProfileTypeUncheckedCreateInput = {
    id?: number
    label: $Enums.UserProfileTypeLabel
    users?: UserUncheckedCreateNestedManyWithoutProfile_typeInput
  }

  export type UserProfileTypeUpdateInput = {
    label?: EnumUserProfileTypeLabelFieldUpdateOperationsInput | $Enums.UserProfileTypeLabel
    users?: UserUpdateManyWithoutProfile_typeNestedInput
  }

  export type UserProfileTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: EnumUserProfileTypeLabelFieldUpdateOperationsInput | $Enums.UserProfileTypeLabel
    users?: UserUncheckedUpdateManyWithoutProfile_typeNestedInput
  }

  export type UserProfileTypeCreateManyInput = {
    id?: number
    label: $Enums.UserProfileTypeLabel
  }

  export type UserProfileTypeUpdateManyMutationInput = {
    label?: EnumUserProfileTypeLabelFieldUpdateOperationsInput | $Enums.UserProfileTypeLabel
  }

  export type UserProfileTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: EnumUserProfileTypeLabelFieldUpdateOperationsInput | $Enums.UserProfileTypeLabel
  }

  export type UserAccessLevelCreateInput = {
    label: $Enums.UserAccessLevelLabel
    users?: UserCreateNestedManyWithoutAccess_levelInput
  }

  export type UserAccessLevelUncheckedCreateInput = {
    id?: number
    label: $Enums.UserAccessLevelLabel
    users?: UserUncheckedCreateNestedManyWithoutAccess_levelInput
  }

  export type UserAccessLevelUpdateInput = {
    label?: EnumUserAccessLevelLabelFieldUpdateOperationsInput | $Enums.UserAccessLevelLabel
    users?: UserUpdateManyWithoutAccess_levelNestedInput
  }

  export type UserAccessLevelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: EnumUserAccessLevelLabelFieldUpdateOperationsInput | $Enums.UserAccessLevelLabel
    users?: UserUncheckedUpdateManyWithoutAccess_levelNestedInput
  }

  export type UserAccessLevelCreateManyInput = {
    id?: number
    label: $Enums.UserAccessLevelLabel
  }

  export type UserAccessLevelUpdateManyMutationInput = {
    label?: EnumUserAccessLevelLabelFieldUpdateOperationsInput | $Enums.UserAccessLevelLabel
  }

  export type UserAccessLevelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: EnumUserAccessLevelLabelFieldUpdateOperationsInput | $Enums.UserAccessLevelLabel
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserProfileTypeScalarRelationFilter = {
    is?: UserProfileTypeWhereInput
    isNot?: UserProfileTypeWhereInput
  }

  export type UserAccessLevelScalarRelationFilter = {
    is?: UserAccessLevelWhereInput
    isNot?: UserAccessLevelWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_profile_type_id?: SortOrder
    user_access_level_id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    date_of_birth?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    user_profile_type_id?: SortOrder
    user_access_level_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_profile_type_id?: SortOrder
    user_access_level_id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    date_of_birth?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_profile_type_id?: SortOrder
    user_access_level_id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    date_of_birth?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    user_profile_type_id?: SortOrder
    user_access_level_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserProfileTypeLabelFilter<$PrismaModel = never> = {
    equals?: $Enums.UserProfileTypeLabel | EnumUserProfileTypeLabelFieldRefInput<$PrismaModel>
    in?: $Enums.UserProfileTypeLabel[] | ListEnumUserProfileTypeLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserProfileTypeLabel[] | ListEnumUserProfileTypeLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumUserProfileTypeLabelFilter<$PrismaModel> | $Enums.UserProfileTypeLabel
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserProfileTypeCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type UserProfileTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserProfileTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type UserProfileTypeMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type UserProfileTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumUserProfileTypeLabelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserProfileTypeLabel | EnumUserProfileTypeLabelFieldRefInput<$PrismaModel>
    in?: $Enums.UserProfileTypeLabel[] | ListEnumUserProfileTypeLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserProfileTypeLabel[] | ListEnumUserProfileTypeLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumUserProfileTypeLabelWithAggregatesFilter<$PrismaModel> | $Enums.UserProfileTypeLabel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserProfileTypeLabelFilter<$PrismaModel>
    _max?: NestedEnumUserProfileTypeLabelFilter<$PrismaModel>
  }

  export type EnumUserAccessLevelLabelFilter<$PrismaModel = never> = {
    equals?: $Enums.UserAccessLevelLabel | EnumUserAccessLevelLabelFieldRefInput<$PrismaModel>
    in?: $Enums.UserAccessLevelLabel[] | ListEnumUserAccessLevelLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserAccessLevelLabel[] | ListEnumUserAccessLevelLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumUserAccessLevelLabelFilter<$PrismaModel> | $Enums.UserAccessLevelLabel
  }

  export type UserAccessLevelCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type UserAccessLevelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserAccessLevelMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type UserAccessLevelMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type UserAccessLevelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumUserAccessLevelLabelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserAccessLevelLabel | EnumUserAccessLevelLabelFieldRefInput<$PrismaModel>
    in?: $Enums.UserAccessLevelLabel[] | ListEnumUserAccessLevelLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserAccessLevelLabel[] | ListEnumUserAccessLevelLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumUserAccessLevelLabelWithAggregatesFilter<$PrismaModel> | $Enums.UserAccessLevelLabel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserAccessLevelLabelFilter<$PrismaModel>
    _max?: NestedEnumUserAccessLevelLabelFilter<$PrismaModel>
  }

  export type UserProfileTypeCreateNestedOneWithoutUsersInput = {
    create?: XOR<UserProfileTypeCreateWithoutUsersInput, UserProfileTypeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserProfileTypeCreateOrConnectWithoutUsersInput
    connect?: UserProfileTypeWhereUniqueInput
  }

  export type UserAccessLevelCreateNestedOneWithoutUsersInput = {
    create?: XOR<UserAccessLevelCreateWithoutUsersInput, UserAccessLevelUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserAccessLevelCreateOrConnectWithoutUsersInput
    connect?: UserAccessLevelWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserProfileTypeUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<UserProfileTypeCreateWithoutUsersInput, UserProfileTypeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserProfileTypeCreateOrConnectWithoutUsersInput
    upsert?: UserProfileTypeUpsertWithoutUsersInput
    connect?: UserProfileTypeWhereUniqueInput
    update?: XOR<XOR<UserProfileTypeUpdateToOneWithWhereWithoutUsersInput, UserProfileTypeUpdateWithoutUsersInput>, UserProfileTypeUncheckedUpdateWithoutUsersInput>
  }

  export type UserAccessLevelUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<UserAccessLevelCreateWithoutUsersInput, UserAccessLevelUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserAccessLevelCreateOrConnectWithoutUsersInput
    upsert?: UserAccessLevelUpsertWithoutUsersInput
    connect?: UserAccessLevelWhereUniqueInput
    update?: XOR<XOR<UserAccessLevelUpdateToOneWithWhereWithoutUsersInput, UserAccessLevelUpdateWithoutUsersInput>, UserAccessLevelUncheckedUpdateWithoutUsersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedManyWithoutProfile_typeInput = {
    create?: XOR<UserCreateWithoutProfile_typeInput, UserUncheckedCreateWithoutProfile_typeInput> | UserCreateWithoutProfile_typeInput[] | UserUncheckedCreateWithoutProfile_typeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProfile_typeInput | UserCreateOrConnectWithoutProfile_typeInput[]
    createMany?: UserCreateManyProfile_typeInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutProfile_typeInput = {
    create?: XOR<UserCreateWithoutProfile_typeInput, UserUncheckedCreateWithoutProfile_typeInput> | UserCreateWithoutProfile_typeInput[] | UserUncheckedCreateWithoutProfile_typeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProfile_typeInput | UserCreateOrConnectWithoutProfile_typeInput[]
    createMany?: UserCreateManyProfile_typeInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumUserProfileTypeLabelFieldUpdateOperationsInput = {
    set?: $Enums.UserProfileTypeLabel
  }

  export type UserUpdateManyWithoutProfile_typeNestedInput = {
    create?: XOR<UserCreateWithoutProfile_typeInput, UserUncheckedCreateWithoutProfile_typeInput> | UserCreateWithoutProfile_typeInput[] | UserUncheckedCreateWithoutProfile_typeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProfile_typeInput | UserCreateOrConnectWithoutProfile_typeInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProfile_typeInput | UserUpsertWithWhereUniqueWithoutProfile_typeInput[]
    createMany?: UserCreateManyProfile_typeInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProfile_typeInput | UserUpdateWithWhereUniqueWithoutProfile_typeInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProfile_typeInput | UserUpdateManyWithWhereWithoutProfile_typeInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutProfile_typeNestedInput = {
    create?: XOR<UserCreateWithoutProfile_typeInput, UserUncheckedCreateWithoutProfile_typeInput> | UserCreateWithoutProfile_typeInput[] | UserUncheckedCreateWithoutProfile_typeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProfile_typeInput | UserCreateOrConnectWithoutProfile_typeInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProfile_typeInput | UserUpsertWithWhereUniqueWithoutProfile_typeInput[]
    createMany?: UserCreateManyProfile_typeInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProfile_typeInput | UserUpdateWithWhereUniqueWithoutProfile_typeInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProfile_typeInput | UserUpdateManyWithWhereWithoutProfile_typeInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutAccess_levelInput = {
    create?: XOR<UserCreateWithoutAccess_levelInput, UserUncheckedCreateWithoutAccess_levelInput> | UserCreateWithoutAccess_levelInput[] | UserUncheckedCreateWithoutAccess_levelInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAccess_levelInput | UserCreateOrConnectWithoutAccess_levelInput[]
    createMany?: UserCreateManyAccess_levelInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutAccess_levelInput = {
    create?: XOR<UserCreateWithoutAccess_levelInput, UserUncheckedCreateWithoutAccess_levelInput> | UserCreateWithoutAccess_levelInput[] | UserUncheckedCreateWithoutAccess_levelInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAccess_levelInput | UserCreateOrConnectWithoutAccess_levelInput[]
    createMany?: UserCreateManyAccess_levelInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumUserAccessLevelLabelFieldUpdateOperationsInput = {
    set?: $Enums.UserAccessLevelLabel
  }

  export type UserUpdateManyWithoutAccess_levelNestedInput = {
    create?: XOR<UserCreateWithoutAccess_levelInput, UserUncheckedCreateWithoutAccess_levelInput> | UserCreateWithoutAccess_levelInput[] | UserUncheckedCreateWithoutAccess_levelInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAccess_levelInput | UserCreateOrConnectWithoutAccess_levelInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAccess_levelInput | UserUpsertWithWhereUniqueWithoutAccess_levelInput[]
    createMany?: UserCreateManyAccess_levelInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAccess_levelInput | UserUpdateWithWhereUniqueWithoutAccess_levelInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAccess_levelInput | UserUpdateManyWithWhereWithoutAccess_levelInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutAccess_levelNestedInput = {
    create?: XOR<UserCreateWithoutAccess_levelInput, UserUncheckedCreateWithoutAccess_levelInput> | UserCreateWithoutAccess_levelInput[] | UserUncheckedCreateWithoutAccess_levelInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAccess_levelInput | UserCreateOrConnectWithoutAccess_levelInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAccess_levelInput | UserUpsertWithWhereUniqueWithoutAccess_levelInput[]
    createMany?: UserCreateManyAccess_levelInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAccess_levelInput | UserUpdateWithWhereUniqueWithoutAccess_levelInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAccess_levelInput | UserUpdateManyWithWhereWithoutAccess_levelInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserProfileTypeLabelFilter<$PrismaModel = never> = {
    equals?: $Enums.UserProfileTypeLabel | EnumUserProfileTypeLabelFieldRefInput<$PrismaModel>
    in?: $Enums.UserProfileTypeLabel[] | ListEnumUserProfileTypeLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserProfileTypeLabel[] | ListEnumUserProfileTypeLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumUserProfileTypeLabelFilter<$PrismaModel> | $Enums.UserProfileTypeLabel
  }

  export type NestedEnumUserProfileTypeLabelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserProfileTypeLabel | EnumUserProfileTypeLabelFieldRefInput<$PrismaModel>
    in?: $Enums.UserProfileTypeLabel[] | ListEnumUserProfileTypeLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserProfileTypeLabel[] | ListEnumUserProfileTypeLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumUserProfileTypeLabelWithAggregatesFilter<$PrismaModel> | $Enums.UserProfileTypeLabel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserProfileTypeLabelFilter<$PrismaModel>
    _max?: NestedEnumUserProfileTypeLabelFilter<$PrismaModel>
  }

  export type NestedEnumUserAccessLevelLabelFilter<$PrismaModel = never> = {
    equals?: $Enums.UserAccessLevelLabel | EnumUserAccessLevelLabelFieldRefInput<$PrismaModel>
    in?: $Enums.UserAccessLevelLabel[] | ListEnumUserAccessLevelLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserAccessLevelLabel[] | ListEnumUserAccessLevelLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumUserAccessLevelLabelFilter<$PrismaModel> | $Enums.UserAccessLevelLabel
  }

  export type NestedEnumUserAccessLevelLabelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserAccessLevelLabel | EnumUserAccessLevelLabelFieldRefInput<$PrismaModel>
    in?: $Enums.UserAccessLevelLabel[] | ListEnumUserAccessLevelLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserAccessLevelLabel[] | ListEnumUserAccessLevelLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumUserAccessLevelLabelWithAggregatesFilter<$PrismaModel> | $Enums.UserAccessLevelLabel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserAccessLevelLabelFilter<$PrismaModel>
    _max?: NestedEnumUserAccessLevelLabelFilter<$PrismaModel>
  }

  export type UserProfileTypeCreateWithoutUsersInput = {
    label: $Enums.UserProfileTypeLabel
  }

  export type UserProfileTypeUncheckedCreateWithoutUsersInput = {
    id?: number
    label: $Enums.UserProfileTypeLabel
  }

  export type UserProfileTypeCreateOrConnectWithoutUsersInput = {
    where: UserProfileTypeWhereUniqueInput
    create: XOR<UserProfileTypeCreateWithoutUsersInput, UserProfileTypeUncheckedCreateWithoutUsersInput>
  }

  export type UserAccessLevelCreateWithoutUsersInput = {
    label: $Enums.UserAccessLevelLabel
  }

  export type UserAccessLevelUncheckedCreateWithoutUsersInput = {
    id?: number
    label: $Enums.UserAccessLevelLabel
  }

  export type UserAccessLevelCreateOrConnectWithoutUsersInput = {
    where: UserAccessLevelWhereUniqueInput
    create: XOR<UserAccessLevelCreateWithoutUsersInput, UserAccessLevelUncheckedCreateWithoutUsersInput>
  }

  export type UserProfileTypeUpsertWithoutUsersInput = {
    update: XOR<UserProfileTypeUpdateWithoutUsersInput, UserProfileTypeUncheckedUpdateWithoutUsersInput>
    create: XOR<UserProfileTypeCreateWithoutUsersInput, UserProfileTypeUncheckedCreateWithoutUsersInput>
    where?: UserProfileTypeWhereInput
  }

  export type UserProfileTypeUpdateToOneWithWhereWithoutUsersInput = {
    where?: UserProfileTypeWhereInput
    data: XOR<UserProfileTypeUpdateWithoutUsersInput, UserProfileTypeUncheckedUpdateWithoutUsersInput>
  }

  export type UserProfileTypeUpdateWithoutUsersInput = {
    label?: EnumUserProfileTypeLabelFieldUpdateOperationsInput | $Enums.UserProfileTypeLabel
  }

  export type UserProfileTypeUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: EnumUserProfileTypeLabelFieldUpdateOperationsInput | $Enums.UserProfileTypeLabel
  }

  export type UserAccessLevelUpsertWithoutUsersInput = {
    update: XOR<UserAccessLevelUpdateWithoutUsersInput, UserAccessLevelUncheckedUpdateWithoutUsersInput>
    create: XOR<UserAccessLevelCreateWithoutUsersInput, UserAccessLevelUncheckedCreateWithoutUsersInput>
    where?: UserAccessLevelWhereInput
  }

  export type UserAccessLevelUpdateToOneWithWhereWithoutUsersInput = {
    where?: UserAccessLevelWhereInput
    data: XOR<UserAccessLevelUpdateWithoutUsersInput, UserAccessLevelUncheckedUpdateWithoutUsersInput>
  }

  export type UserAccessLevelUpdateWithoutUsersInput = {
    label?: EnumUserAccessLevelLabelFieldUpdateOperationsInput | $Enums.UserAccessLevelLabel
  }

  export type UserAccessLevelUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: EnumUserAccessLevelLabelFieldUpdateOperationsInput | $Enums.UserAccessLevelLabel
  }

  export type UserCreateWithoutProfile_typeInput = {
    email: string
    password: string
    firstname: string
    lastname: string
    date_of_birth: Date | string
    created_at?: Date | string
    update_at?: Date | string
    access_level: UserAccessLevelCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutProfile_typeInput = {
    id?: number
    email: string
    password: string
    user_access_level_id: number
    firstname: string
    lastname: string
    date_of_birth: Date | string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type UserCreateOrConnectWithoutProfile_typeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfile_typeInput, UserUncheckedCreateWithoutProfile_typeInput>
  }

  export type UserCreateManyProfile_typeInputEnvelope = {
    data: UserCreateManyProfile_typeInput | UserCreateManyProfile_typeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutProfile_typeInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutProfile_typeInput, UserUncheckedUpdateWithoutProfile_typeInput>
    create: XOR<UserCreateWithoutProfile_typeInput, UserUncheckedCreateWithoutProfile_typeInput>
  }

  export type UserUpdateWithWhereUniqueWithoutProfile_typeInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutProfile_typeInput, UserUncheckedUpdateWithoutProfile_typeInput>
  }

  export type UserUpdateManyWithWhereWithoutProfile_typeInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutProfile_typeInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    user_profile_type_id?: IntFilter<"User"> | number
    user_access_level_id?: IntFilter<"User"> | number
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    date_of_birth?: DateTimeFilter<"User"> | Date | string
    created_at?: DateTimeFilter<"User"> | Date | string
    update_at?: DateTimeFilter<"User"> | Date | string
  }

  export type UserCreateWithoutAccess_levelInput = {
    email: string
    password: string
    firstname: string
    lastname: string
    date_of_birth: Date | string
    created_at?: Date | string
    update_at?: Date | string
    profile_type: UserProfileTypeCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAccess_levelInput = {
    id?: number
    email: string
    password: string
    user_profile_type_id: number
    firstname: string
    lastname: string
    date_of_birth: Date | string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type UserCreateOrConnectWithoutAccess_levelInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccess_levelInput, UserUncheckedCreateWithoutAccess_levelInput>
  }

  export type UserCreateManyAccess_levelInputEnvelope = {
    data: UserCreateManyAccess_levelInput | UserCreateManyAccess_levelInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutAccess_levelInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAccess_levelInput, UserUncheckedUpdateWithoutAccess_levelInput>
    create: XOR<UserCreateWithoutAccess_levelInput, UserUncheckedCreateWithoutAccess_levelInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAccess_levelInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAccess_levelInput, UserUncheckedUpdateWithoutAccess_levelInput>
  }

  export type UserUpdateManyWithWhereWithoutAccess_levelInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutAccess_levelInput>
  }

  export type UserCreateManyProfile_typeInput = {
    id?: number
    email: string
    password: string
    user_access_level_id: number
    firstname: string
    lastname: string
    date_of_birth: Date | string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type UserUpdateWithoutProfile_typeInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    access_level?: UserAccessLevelUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutProfile_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_access_level_id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutProfile_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_access_level_id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyAccess_levelInput = {
    id?: number
    email: string
    password: string
    user_profile_type_id: number
    firstname: string
    lastname: string
    date_of_birth: Date | string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type UserUpdateWithoutAccess_levelInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_type?: UserProfileTypeUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAccess_levelInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_profile_type_id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutAccess_levelInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_profile_type_id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
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