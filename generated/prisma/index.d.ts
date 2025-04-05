
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
 * Model ClientSessions
 * 
 */
export type ClientSessions = $Result.DefaultSelection<Prisma.$ClientSessionsPayload>
/**
 * Model CommunityVideos
 * 
 */
export type CommunityVideos = $Result.DefaultSelection<Prisma.$CommunityVideosPayload>

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
   * `prisma.clientSessions`: Exposes CRUD operations for the **ClientSessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientSessions
    * const clientSessions = await prisma.clientSessions.findMany()
    * ```
    */
  get clientSessions(): Prisma.ClientSessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communityVideos`: Exposes CRUD operations for the **CommunityVideos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunityVideos
    * const communityVideos = await prisma.communityVideos.findMany()
    * ```
    */
  get communityVideos(): Prisma.CommunityVideosDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    ClientSessions: 'ClientSessions',
    CommunityVideos: 'CommunityVideos'
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
      modelProps: "user" | "clientSessions" | "communityVideos"
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
      ClientSessions: {
        payload: Prisma.$ClientSessionsPayload<ExtArgs>
        fields: Prisma.ClientSessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientSessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientSessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSessionsPayload>
          }
          findFirst: {
            args: Prisma.ClientSessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientSessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSessionsPayload>
          }
          findMany: {
            args: Prisma.ClientSessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSessionsPayload>[]
          }
          create: {
            args: Prisma.ClientSessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSessionsPayload>
          }
          createMany: {
            args: Prisma.ClientSessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientSessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSessionsPayload>[]
          }
          delete: {
            args: Prisma.ClientSessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSessionsPayload>
          }
          update: {
            args: Prisma.ClientSessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSessionsPayload>
          }
          deleteMany: {
            args: Prisma.ClientSessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientSessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientSessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSessionsPayload>[]
          }
          upsert: {
            args: Prisma.ClientSessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSessionsPayload>
          }
          aggregate: {
            args: Prisma.ClientSessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientSessions>
          }
          groupBy: {
            args: Prisma.ClientSessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientSessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientSessionsCountArgs<ExtArgs>
            result: $Utils.Optional<ClientSessionsCountAggregateOutputType> | number
          }
        }
      }
      CommunityVideos: {
        payload: Prisma.$CommunityVideosPayload<ExtArgs>
        fields: Prisma.CommunityVideosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityVideosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityVideosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityVideosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityVideosPayload>
          }
          findFirst: {
            args: Prisma.CommunityVideosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityVideosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityVideosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityVideosPayload>
          }
          findMany: {
            args: Prisma.CommunityVideosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityVideosPayload>[]
          }
          create: {
            args: Prisma.CommunityVideosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityVideosPayload>
          }
          createMany: {
            args: Prisma.CommunityVideosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityVideosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityVideosPayload>[]
          }
          delete: {
            args: Prisma.CommunityVideosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityVideosPayload>
          }
          update: {
            args: Prisma.CommunityVideosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityVideosPayload>
          }
          deleteMany: {
            args: Prisma.CommunityVideosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityVideosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunityVideosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityVideosPayload>[]
          }
          upsert: {
            args: Prisma.CommunityVideosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityVideosPayload>
          }
          aggregate: {
            args: Prisma.CommunityVideosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunityVideos>
          }
          groupBy: {
            args: Prisma.CommunityVideosGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityVideosGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityVideosCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityVideosCountAggregateOutputType> | number
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
    clientSessions?: ClientSessionsOmit
    communityVideos?: CommunityVideosOmit
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
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientSessionsWhereInput
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
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
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
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
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
    name: string | null
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
    name?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$ClientSessionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
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
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientSessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
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
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSessions
     */
    select?: ClientSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSessions
     */
    omit?: ClientSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSessionsInclude<ExtArgs> | null
    where?: ClientSessionsWhereInput
    orderBy?: ClientSessionsOrderByWithRelationInput | ClientSessionsOrderByWithRelationInput[]
    cursor?: ClientSessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientSessionsScalarFieldEnum | ClientSessionsScalarFieldEnum[]
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
   * Model ClientSessions
   */

  export type AggregateClientSessions = {
    _count: ClientSessionsCountAggregateOutputType | null
    _avg: ClientSessionsAvgAggregateOutputType | null
    _sum: ClientSessionsSumAggregateOutputType | null
    _min: ClientSessionsMinAggregateOutputType | null
    _max: ClientSessionsMaxAggregateOutputType | null
  }

  export type ClientSessionsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ClientSessionsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ClientSessionsMinAggregateOutputType = {
    id: number | null
    title: string | null
    thumbnail: string | null
    url: string | null
    duration: string | null
    date: Date | null
    userId: number | null
  }

  export type ClientSessionsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    thumbnail: string | null
    url: string | null
    duration: string | null
    date: Date | null
    userId: number | null
  }

  export type ClientSessionsCountAggregateOutputType = {
    id: number
    title: number
    thumbnail: number
    url: number
    duration: number
    date: number
    userId: number
    _all: number
  }


  export type ClientSessionsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ClientSessionsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ClientSessionsMinAggregateInputType = {
    id?: true
    title?: true
    thumbnail?: true
    url?: true
    duration?: true
    date?: true
    userId?: true
  }

  export type ClientSessionsMaxAggregateInputType = {
    id?: true
    title?: true
    thumbnail?: true
    url?: true
    duration?: true
    date?: true
    userId?: true
  }

  export type ClientSessionsCountAggregateInputType = {
    id?: true
    title?: true
    thumbnail?: true
    url?: true
    duration?: true
    date?: true
    userId?: true
    _all?: true
  }

  export type ClientSessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientSessions to aggregate.
     */
    where?: ClientSessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientSessions to fetch.
     */
    orderBy?: ClientSessionsOrderByWithRelationInput | ClientSessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientSessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientSessions
    **/
    _count?: true | ClientSessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientSessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientSessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientSessionsMaxAggregateInputType
  }

  export type GetClientSessionsAggregateType<T extends ClientSessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateClientSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientSessions[P]>
      : GetScalarType<T[P], AggregateClientSessions[P]>
  }




  export type ClientSessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientSessionsWhereInput
    orderBy?: ClientSessionsOrderByWithAggregationInput | ClientSessionsOrderByWithAggregationInput[]
    by: ClientSessionsScalarFieldEnum[] | ClientSessionsScalarFieldEnum
    having?: ClientSessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientSessionsCountAggregateInputType | true
    _avg?: ClientSessionsAvgAggregateInputType
    _sum?: ClientSessionsSumAggregateInputType
    _min?: ClientSessionsMinAggregateInputType
    _max?: ClientSessionsMaxAggregateInputType
  }

  export type ClientSessionsGroupByOutputType = {
    id: number
    title: string | null
    thumbnail: string | null
    url: string | null
    duration: string | null
    date: Date
    userId: number
    _count: ClientSessionsCountAggregateOutputType | null
    _avg: ClientSessionsAvgAggregateOutputType | null
    _sum: ClientSessionsSumAggregateOutputType | null
    _min: ClientSessionsMinAggregateOutputType | null
    _max: ClientSessionsMaxAggregateOutputType | null
  }

  type GetClientSessionsGroupByPayload<T extends ClientSessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientSessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientSessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientSessionsGroupByOutputType[P]>
            : GetScalarType<T[P], ClientSessionsGroupByOutputType[P]>
        }
      >
    >


  export type ClientSessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    thumbnail?: boolean
    url?: boolean
    duration?: boolean
    date?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientSessions"]>

  export type ClientSessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    thumbnail?: boolean
    url?: boolean
    duration?: boolean
    date?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientSessions"]>

  export type ClientSessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    thumbnail?: boolean
    url?: boolean
    duration?: boolean
    date?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientSessions"]>

  export type ClientSessionsSelectScalar = {
    id?: boolean
    title?: boolean
    thumbnail?: boolean
    url?: boolean
    duration?: boolean
    date?: boolean
    userId?: boolean
  }

  export type ClientSessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "thumbnail" | "url" | "duration" | "date" | "userId", ExtArgs["result"]["clientSessions"]>
  export type ClientSessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClientSessionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClientSessionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClientSessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientSessions"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      thumbnail: string | null
      url: string | null
      duration: string | null
      date: Date
      userId: number
    }, ExtArgs["result"]["clientSessions"]>
    composites: {}
  }

  type ClientSessionsGetPayload<S extends boolean | null | undefined | ClientSessionsDefaultArgs> = $Result.GetResult<Prisma.$ClientSessionsPayload, S>

  type ClientSessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientSessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientSessionsCountAggregateInputType | true
    }

  export interface ClientSessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientSessions'], meta: { name: 'ClientSessions' } }
    /**
     * Find zero or one ClientSessions that matches the filter.
     * @param {ClientSessionsFindUniqueArgs} args - Arguments to find a ClientSessions
     * @example
     * // Get one ClientSessions
     * const clientSessions = await prisma.clientSessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientSessionsFindUniqueArgs>(args: SelectSubset<T, ClientSessionsFindUniqueArgs<ExtArgs>>): Prisma__ClientSessionsClient<$Result.GetResult<Prisma.$ClientSessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientSessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientSessionsFindUniqueOrThrowArgs} args - Arguments to find a ClientSessions
     * @example
     * // Get one ClientSessions
     * const clientSessions = await prisma.clientSessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientSessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientSessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientSessionsClient<$Result.GetResult<Prisma.$ClientSessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSessionsFindFirstArgs} args - Arguments to find a ClientSessions
     * @example
     * // Get one ClientSessions
     * const clientSessions = await prisma.clientSessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientSessionsFindFirstArgs>(args?: SelectSubset<T, ClientSessionsFindFirstArgs<ExtArgs>>): Prisma__ClientSessionsClient<$Result.GetResult<Prisma.$ClientSessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientSessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSessionsFindFirstOrThrowArgs} args - Arguments to find a ClientSessions
     * @example
     * // Get one ClientSessions
     * const clientSessions = await prisma.clientSessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientSessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientSessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientSessionsClient<$Result.GetResult<Prisma.$ClientSessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientSessions
     * const clientSessions = await prisma.clientSessions.findMany()
     * 
     * // Get first 10 ClientSessions
     * const clientSessions = await prisma.clientSessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientSessionsWithIdOnly = await prisma.clientSessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientSessionsFindManyArgs>(args?: SelectSubset<T, ClientSessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientSessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientSessions.
     * @param {ClientSessionsCreateArgs} args - Arguments to create a ClientSessions.
     * @example
     * // Create one ClientSessions
     * const ClientSessions = await prisma.clientSessions.create({
     *   data: {
     *     // ... data to create a ClientSessions
     *   }
     * })
     * 
     */
    create<T extends ClientSessionsCreateArgs>(args: SelectSubset<T, ClientSessionsCreateArgs<ExtArgs>>): Prisma__ClientSessionsClient<$Result.GetResult<Prisma.$ClientSessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientSessions.
     * @param {ClientSessionsCreateManyArgs} args - Arguments to create many ClientSessions.
     * @example
     * // Create many ClientSessions
     * const clientSessions = await prisma.clientSessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientSessionsCreateManyArgs>(args?: SelectSubset<T, ClientSessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientSessions and returns the data saved in the database.
     * @param {ClientSessionsCreateManyAndReturnArgs} args - Arguments to create many ClientSessions.
     * @example
     * // Create many ClientSessions
     * const clientSessions = await prisma.clientSessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientSessions and only return the `id`
     * const clientSessionsWithIdOnly = await prisma.clientSessions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientSessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientSessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientSessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientSessions.
     * @param {ClientSessionsDeleteArgs} args - Arguments to delete one ClientSessions.
     * @example
     * // Delete one ClientSessions
     * const ClientSessions = await prisma.clientSessions.delete({
     *   where: {
     *     // ... filter to delete one ClientSessions
     *   }
     * })
     * 
     */
    delete<T extends ClientSessionsDeleteArgs>(args: SelectSubset<T, ClientSessionsDeleteArgs<ExtArgs>>): Prisma__ClientSessionsClient<$Result.GetResult<Prisma.$ClientSessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientSessions.
     * @param {ClientSessionsUpdateArgs} args - Arguments to update one ClientSessions.
     * @example
     * // Update one ClientSessions
     * const clientSessions = await prisma.clientSessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientSessionsUpdateArgs>(args: SelectSubset<T, ClientSessionsUpdateArgs<ExtArgs>>): Prisma__ClientSessionsClient<$Result.GetResult<Prisma.$ClientSessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientSessions.
     * @param {ClientSessionsDeleteManyArgs} args - Arguments to filter ClientSessions to delete.
     * @example
     * // Delete a few ClientSessions
     * const { count } = await prisma.clientSessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientSessionsDeleteManyArgs>(args?: SelectSubset<T, ClientSessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientSessions
     * const clientSessions = await prisma.clientSessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientSessionsUpdateManyArgs>(args: SelectSubset<T, ClientSessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientSessions and returns the data updated in the database.
     * @param {ClientSessionsUpdateManyAndReturnArgs} args - Arguments to update many ClientSessions.
     * @example
     * // Update many ClientSessions
     * const clientSessions = await prisma.clientSessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientSessions and only return the `id`
     * const clientSessionsWithIdOnly = await prisma.clientSessions.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientSessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientSessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientSessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientSessions.
     * @param {ClientSessionsUpsertArgs} args - Arguments to update or create a ClientSessions.
     * @example
     * // Update or create a ClientSessions
     * const clientSessions = await prisma.clientSessions.upsert({
     *   create: {
     *     // ... data to create a ClientSessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientSessions we want to update
     *   }
     * })
     */
    upsert<T extends ClientSessionsUpsertArgs>(args: SelectSubset<T, ClientSessionsUpsertArgs<ExtArgs>>): Prisma__ClientSessionsClient<$Result.GetResult<Prisma.$ClientSessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSessionsCountArgs} args - Arguments to filter ClientSessions to count.
     * @example
     * // Count the number of ClientSessions
     * const count = await prisma.clientSessions.count({
     *   where: {
     *     // ... the filter for the ClientSessions we want to count
     *   }
     * })
    **/
    count<T extends ClientSessionsCountArgs>(
      args?: Subset<T, ClientSessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientSessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientSessionsAggregateArgs>(args: Subset<T, ClientSessionsAggregateArgs>): Prisma.PrismaPromise<GetClientSessionsAggregateType<T>>

    /**
     * Group by ClientSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSessionsGroupByArgs} args - Group by arguments.
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
      T extends ClientSessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientSessionsGroupByArgs['orderBy'] }
        : { orderBy?: ClientSessionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientSessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientSessions model
   */
  readonly fields: ClientSessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientSessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientSessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ClientSessions model
   */ 
  interface ClientSessionsFieldRefs {
    readonly id: FieldRef<"ClientSessions", 'Int'>
    readonly title: FieldRef<"ClientSessions", 'String'>
    readonly thumbnail: FieldRef<"ClientSessions", 'String'>
    readonly url: FieldRef<"ClientSessions", 'String'>
    readonly duration: FieldRef<"ClientSessions", 'String'>
    readonly date: FieldRef<"ClientSessions", 'DateTime'>
    readonly userId: FieldRef<"ClientSessions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ClientSessions findUnique
   */
  export type ClientSessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSessions
     */
    select?: ClientSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSessions
     */
    omit?: ClientSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSessionsInclude<ExtArgs> | null
    /**
     * Filter, which ClientSessions to fetch.
     */
    where: ClientSessionsWhereUniqueInput
  }

  /**
   * ClientSessions findUniqueOrThrow
   */
  export type ClientSessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSessions
     */
    select?: ClientSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSessions
     */
    omit?: ClientSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSessionsInclude<ExtArgs> | null
    /**
     * Filter, which ClientSessions to fetch.
     */
    where: ClientSessionsWhereUniqueInput
  }

  /**
   * ClientSessions findFirst
   */
  export type ClientSessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSessions
     */
    select?: ClientSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSessions
     */
    omit?: ClientSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSessionsInclude<ExtArgs> | null
    /**
     * Filter, which ClientSessions to fetch.
     */
    where?: ClientSessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientSessions to fetch.
     */
    orderBy?: ClientSessionsOrderByWithRelationInput | ClientSessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientSessions.
     */
    cursor?: ClientSessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientSessions.
     */
    distinct?: ClientSessionsScalarFieldEnum | ClientSessionsScalarFieldEnum[]
  }

  /**
   * ClientSessions findFirstOrThrow
   */
  export type ClientSessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSessions
     */
    select?: ClientSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSessions
     */
    omit?: ClientSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSessionsInclude<ExtArgs> | null
    /**
     * Filter, which ClientSessions to fetch.
     */
    where?: ClientSessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientSessions to fetch.
     */
    orderBy?: ClientSessionsOrderByWithRelationInput | ClientSessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientSessions.
     */
    cursor?: ClientSessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientSessions.
     */
    distinct?: ClientSessionsScalarFieldEnum | ClientSessionsScalarFieldEnum[]
  }

  /**
   * ClientSessions findMany
   */
  export type ClientSessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSessions
     */
    select?: ClientSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSessions
     */
    omit?: ClientSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSessionsInclude<ExtArgs> | null
    /**
     * Filter, which ClientSessions to fetch.
     */
    where?: ClientSessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientSessions to fetch.
     */
    orderBy?: ClientSessionsOrderByWithRelationInput | ClientSessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientSessions.
     */
    cursor?: ClientSessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientSessions.
     */
    skip?: number
    distinct?: ClientSessionsScalarFieldEnum | ClientSessionsScalarFieldEnum[]
  }

  /**
   * ClientSessions create
   */
  export type ClientSessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSessions
     */
    select?: ClientSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSessions
     */
    omit?: ClientSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientSessions.
     */
    data: XOR<ClientSessionsCreateInput, ClientSessionsUncheckedCreateInput>
  }

  /**
   * ClientSessions createMany
   */
  export type ClientSessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientSessions.
     */
    data: ClientSessionsCreateManyInput | ClientSessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientSessions createManyAndReturn
   */
  export type ClientSessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSessions
     */
    select?: ClientSessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSessions
     */
    omit?: ClientSessionsOmit<ExtArgs> | null
    /**
     * The data used to create many ClientSessions.
     */
    data: ClientSessionsCreateManyInput | ClientSessionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSessionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientSessions update
   */
  export type ClientSessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSessions
     */
    select?: ClientSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSessions
     */
    omit?: ClientSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientSessions.
     */
    data: XOR<ClientSessionsUpdateInput, ClientSessionsUncheckedUpdateInput>
    /**
     * Choose, which ClientSessions to update.
     */
    where: ClientSessionsWhereUniqueInput
  }

  /**
   * ClientSessions updateMany
   */
  export type ClientSessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientSessions.
     */
    data: XOR<ClientSessionsUpdateManyMutationInput, ClientSessionsUncheckedUpdateManyInput>
    /**
     * Filter which ClientSessions to update
     */
    where?: ClientSessionsWhereInput
    /**
     * Limit how many ClientSessions to update.
     */
    limit?: number
  }

  /**
   * ClientSessions updateManyAndReturn
   */
  export type ClientSessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSessions
     */
    select?: ClientSessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSessions
     */
    omit?: ClientSessionsOmit<ExtArgs> | null
    /**
     * The data used to update ClientSessions.
     */
    data: XOR<ClientSessionsUpdateManyMutationInput, ClientSessionsUncheckedUpdateManyInput>
    /**
     * Filter which ClientSessions to update
     */
    where?: ClientSessionsWhereInput
    /**
     * Limit how many ClientSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSessionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientSessions upsert
   */
  export type ClientSessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSessions
     */
    select?: ClientSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSessions
     */
    omit?: ClientSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientSessions to update in case it exists.
     */
    where: ClientSessionsWhereUniqueInput
    /**
     * In case the ClientSessions found by the `where` argument doesn't exist, create a new ClientSessions with this data.
     */
    create: XOR<ClientSessionsCreateInput, ClientSessionsUncheckedCreateInput>
    /**
     * In case the ClientSessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientSessionsUpdateInput, ClientSessionsUncheckedUpdateInput>
  }

  /**
   * ClientSessions delete
   */
  export type ClientSessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSessions
     */
    select?: ClientSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSessions
     */
    omit?: ClientSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSessionsInclude<ExtArgs> | null
    /**
     * Filter which ClientSessions to delete.
     */
    where: ClientSessionsWhereUniqueInput
  }

  /**
   * ClientSessions deleteMany
   */
  export type ClientSessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientSessions to delete
     */
    where?: ClientSessionsWhereInput
    /**
     * Limit how many ClientSessions to delete.
     */
    limit?: number
  }

  /**
   * ClientSessions without action
   */
  export type ClientSessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSessions
     */
    select?: ClientSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSessions
     */
    omit?: ClientSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSessionsInclude<ExtArgs> | null
  }


  /**
   * Model CommunityVideos
   */

  export type AggregateCommunityVideos = {
    _count: CommunityVideosCountAggregateOutputType | null
    _avg: CommunityVideosAvgAggregateOutputType | null
    _sum: CommunityVideosSumAggregateOutputType | null
    _min: CommunityVideosMinAggregateOutputType | null
    _max: CommunityVideosMaxAggregateOutputType | null
  }

  export type CommunityVideosAvgAggregateOutputType = {
    id: number | null
  }

  export type CommunityVideosSumAggregateOutputType = {
    id: number | null
  }

  export type CommunityVideosMinAggregateOutputType = {
    id: number | null
    title: string | null
    thumbnail: string | null
    url: string | null
    duration: string | null
    date: Date | null
  }

  export type CommunityVideosMaxAggregateOutputType = {
    id: number | null
    title: string | null
    thumbnail: string | null
    url: string | null
    duration: string | null
    date: Date | null
  }

  export type CommunityVideosCountAggregateOutputType = {
    id: number
    title: number
    thumbnail: number
    url: number
    duration: number
    date: number
    _all: number
  }


  export type CommunityVideosAvgAggregateInputType = {
    id?: true
  }

  export type CommunityVideosSumAggregateInputType = {
    id?: true
  }

  export type CommunityVideosMinAggregateInputType = {
    id?: true
    title?: true
    thumbnail?: true
    url?: true
    duration?: true
    date?: true
  }

  export type CommunityVideosMaxAggregateInputType = {
    id?: true
    title?: true
    thumbnail?: true
    url?: true
    duration?: true
    date?: true
  }

  export type CommunityVideosCountAggregateInputType = {
    id?: true
    title?: true
    thumbnail?: true
    url?: true
    duration?: true
    date?: true
    _all?: true
  }

  export type CommunityVideosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityVideos to aggregate.
     */
    where?: CommunityVideosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityVideos to fetch.
     */
    orderBy?: CommunityVideosOrderByWithRelationInput | CommunityVideosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityVideosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunityVideos
    **/
    _count?: true | CommunityVideosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommunityVideosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommunityVideosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityVideosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityVideosMaxAggregateInputType
  }

  export type GetCommunityVideosAggregateType<T extends CommunityVideosAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunityVideos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunityVideos[P]>
      : GetScalarType<T[P], AggregateCommunityVideos[P]>
  }




  export type CommunityVideosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityVideosWhereInput
    orderBy?: CommunityVideosOrderByWithAggregationInput | CommunityVideosOrderByWithAggregationInput[]
    by: CommunityVideosScalarFieldEnum[] | CommunityVideosScalarFieldEnum
    having?: CommunityVideosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityVideosCountAggregateInputType | true
    _avg?: CommunityVideosAvgAggregateInputType
    _sum?: CommunityVideosSumAggregateInputType
    _min?: CommunityVideosMinAggregateInputType
    _max?: CommunityVideosMaxAggregateInputType
  }

  export type CommunityVideosGroupByOutputType = {
    id: number
    title: string | null
    thumbnail: string | null
    url: string | null
    duration: string | null
    date: Date
    _count: CommunityVideosCountAggregateOutputType | null
    _avg: CommunityVideosAvgAggregateOutputType | null
    _sum: CommunityVideosSumAggregateOutputType | null
    _min: CommunityVideosMinAggregateOutputType | null
    _max: CommunityVideosMaxAggregateOutputType | null
  }

  type GetCommunityVideosGroupByPayload<T extends CommunityVideosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityVideosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityVideosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityVideosGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityVideosGroupByOutputType[P]>
        }
      >
    >


  export type CommunityVideosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    thumbnail?: boolean
    url?: boolean
    duration?: boolean
    date?: boolean
  }, ExtArgs["result"]["communityVideos"]>

  export type CommunityVideosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    thumbnail?: boolean
    url?: boolean
    duration?: boolean
    date?: boolean
  }, ExtArgs["result"]["communityVideos"]>

  export type CommunityVideosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    thumbnail?: boolean
    url?: boolean
    duration?: boolean
    date?: boolean
  }, ExtArgs["result"]["communityVideos"]>

  export type CommunityVideosSelectScalar = {
    id?: boolean
    title?: boolean
    thumbnail?: boolean
    url?: boolean
    duration?: boolean
    date?: boolean
  }

  export type CommunityVideosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "thumbnail" | "url" | "duration" | "date", ExtArgs["result"]["communityVideos"]>

  export type $CommunityVideosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunityVideos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      thumbnail: string | null
      url: string | null
      duration: string | null
      date: Date
    }, ExtArgs["result"]["communityVideos"]>
    composites: {}
  }

  type CommunityVideosGetPayload<S extends boolean | null | undefined | CommunityVideosDefaultArgs> = $Result.GetResult<Prisma.$CommunityVideosPayload, S>

  type CommunityVideosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityVideosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityVideosCountAggregateInputType | true
    }

  export interface CommunityVideosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunityVideos'], meta: { name: 'CommunityVideos' } }
    /**
     * Find zero or one CommunityVideos that matches the filter.
     * @param {CommunityVideosFindUniqueArgs} args - Arguments to find a CommunityVideos
     * @example
     * // Get one CommunityVideos
     * const communityVideos = await prisma.communityVideos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityVideosFindUniqueArgs>(args: SelectSubset<T, CommunityVideosFindUniqueArgs<ExtArgs>>): Prisma__CommunityVideosClient<$Result.GetResult<Prisma.$CommunityVideosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommunityVideos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityVideosFindUniqueOrThrowArgs} args - Arguments to find a CommunityVideos
     * @example
     * // Get one CommunityVideos
     * const communityVideos = await prisma.communityVideos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityVideosFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityVideosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityVideosClient<$Result.GetResult<Prisma.$CommunityVideosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityVideos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityVideosFindFirstArgs} args - Arguments to find a CommunityVideos
     * @example
     * // Get one CommunityVideos
     * const communityVideos = await prisma.communityVideos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityVideosFindFirstArgs>(args?: SelectSubset<T, CommunityVideosFindFirstArgs<ExtArgs>>): Prisma__CommunityVideosClient<$Result.GetResult<Prisma.$CommunityVideosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityVideos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityVideosFindFirstOrThrowArgs} args - Arguments to find a CommunityVideos
     * @example
     * // Get one CommunityVideos
     * const communityVideos = await prisma.communityVideos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityVideosFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityVideosFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityVideosClient<$Result.GetResult<Prisma.$CommunityVideosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommunityVideos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityVideosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunityVideos
     * const communityVideos = await prisma.communityVideos.findMany()
     * 
     * // Get first 10 CommunityVideos
     * const communityVideos = await prisma.communityVideos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityVideosWithIdOnly = await prisma.communityVideos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityVideosFindManyArgs>(args?: SelectSubset<T, CommunityVideosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityVideosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommunityVideos.
     * @param {CommunityVideosCreateArgs} args - Arguments to create a CommunityVideos.
     * @example
     * // Create one CommunityVideos
     * const CommunityVideos = await prisma.communityVideos.create({
     *   data: {
     *     // ... data to create a CommunityVideos
     *   }
     * })
     * 
     */
    create<T extends CommunityVideosCreateArgs>(args: SelectSubset<T, CommunityVideosCreateArgs<ExtArgs>>): Prisma__CommunityVideosClient<$Result.GetResult<Prisma.$CommunityVideosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommunityVideos.
     * @param {CommunityVideosCreateManyArgs} args - Arguments to create many CommunityVideos.
     * @example
     * // Create many CommunityVideos
     * const communityVideos = await prisma.communityVideos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityVideosCreateManyArgs>(args?: SelectSubset<T, CommunityVideosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommunityVideos and returns the data saved in the database.
     * @param {CommunityVideosCreateManyAndReturnArgs} args - Arguments to create many CommunityVideos.
     * @example
     * // Create many CommunityVideos
     * const communityVideos = await prisma.communityVideos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommunityVideos and only return the `id`
     * const communityVideosWithIdOnly = await prisma.communityVideos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityVideosCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityVideosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityVideosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommunityVideos.
     * @param {CommunityVideosDeleteArgs} args - Arguments to delete one CommunityVideos.
     * @example
     * // Delete one CommunityVideos
     * const CommunityVideos = await prisma.communityVideos.delete({
     *   where: {
     *     // ... filter to delete one CommunityVideos
     *   }
     * })
     * 
     */
    delete<T extends CommunityVideosDeleteArgs>(args: SelectSubset<T, CommunityVideosDeleteArgs<ExtArgs>>): Prisma__CommunityVideosClient<$Result.GetResult<Prisma.$CommunityVideosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommunityVideos.
     * @param {CommunityVideosUpdateArgs} args - Arguments to update one CommunityVideos.
     * @example
     * // Update one CommunityVideos
     * const communityVideos = await prisma.communityVideos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityVideosUpdateArgs>(args: SelectSubset<T, CommunityVideosUpdateArgs<ExtArgs>>): Prisma__CommunityVideosClient<$Result.GetResult<Prisma.$CommunityVideosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommunityVideos.
     * @param {CommunityVideosDeleteManyArgs} args - Arguments to filter CommunityVideos to delete.
     * @example
     * // Delete a few CommunityVideos
     * const { count } = await prisma.communityVideos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityVideosDeleteManyArgs>(args?: SelectSubset<T, CommunityVideosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityVideosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunityVideos
     * const communityVideos = await prisma.communityVideos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityVideosUpdateManyArgs>(args: SelectSubset<T, CommunityVideosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityVideos and returns the data updated in the database.
     * @param {CommunityVideosUpdateManyAndReturnArgs} args - Arguments to update many CommunityVideos.
     * @example
     * // Update many CommunityVideos
     * const communityVideos = await prisma.communityVideos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommunityVideos and only return the `id`
     * const communityVideosWithIdOnly = await prisma.communityVideos.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommunityVideosUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunityVideosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityVideosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommunityVideos.
     * @param {CommunityVideosUpsertArgs} args - Arguments to update or create a CommunityVideos.
     * @example
     * // Update or create a CommunityVideos
     * const communityVideos = await prisma.communityVideos.upsert({
     *   create: {
     *     // ... data to create a CommunityVideos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunityVideos we want to update
     *   }
     * })
     */
    upsert<T extends CommunityVideosUpsertArgs>(args: SelectSubset<T, CommunityVideosUpsertArgs<ExtArgs>>): Prisma__CommunityVideosClient<$Result.GetResult<Prisma.$CommunityVideosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommunityVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityVideosCountArgs} args - Arguments to filter CommunityVideos to count.
     * @example
     * // Count the number of CommunityVideos
     * const count = await prisma.communityVideos.count({
     *   where: {
     *     // ... the filter for the CommunityVideos we want to count
     *   }
     * })
    **/
    count<T extends CommunityVideosCountArgs>(
      args?: Subset<T, CommunityVideosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityVideosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunityVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityVideosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunityVideosAggregateArgs>(args: Subset<T, CommunityVideosAggregateArgs>): Prisma.PrismaPromise<GetCommunityVideosAggregateType<T>>

    /**
     * Group by CommunityVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityVideosGroupByArgs} args - Group by arguments.
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
      T extends CommunityVideosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityVideosGroupByArgs['orderBy'] }
        : { orderBy?: CommunityVideosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommunityVideosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityVideosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunityVideos model
   */
  readonly fields: CommunityVideosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunityVideos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityVideosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the CommunityVideos model
   */ 
  interface CommunityVideosFieldRefs {
    readonly id: FieldRef<"CommunityVideos", 'Int'>
    readonly title: FieldRef<"CommunityVideos", 'String'>
    readonly thumbnail: FieldRef<"CommunityVideos", 'String'>
    readonly url: FieldRef<"CommunityVideos", 'String'>
    readonly duration: FieldRef<"CommunityVideos", 'String'>
    readonly date: FieldRef<"CommunityVideos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommunityVideos findUnique
   */
  export type CommunityVideosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVideos
     */
    select?: CommunityVideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVideos
     */
    omit?: CommunityVideosOmit<ExtArgs> | null
    /**
     * Filter, which CommunityVideos to fetch.
     */
    where: CommunityVideosWhereUniqueInput
  }

  /**
   * CommunityVideos findUniqueOrThrow
   */
  export type CommunityVideosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVideos
     */
    select?: CommunityVideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVideos
     */
    omit?: CommunityVideosOmit<ExtArgs> | null
    /**
     * Filter, which CommunityVideos to fetch.
     */
    where: CommunityVideosWhereUniqueInput
  }

  /**
   * CommunityVideos findFirst
   */
  export type CommunityVideosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVideos
     */
    select?: CommunityVideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVideos
     */
    omit?: CommunityVideosOmit<ExtArgs> | null
    /**
     * Filter, which CommunityVideos to fetch.
     */
    where?: CommunityVideosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityVideos to fetch.
     */
    orderBy?: CommunityVideosOrderByWithRelationInput | CommunityVideosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityVideos.
     */
    cursor?: CommunityVideosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityVideos.
     */
    distinct?: CommunityVideosScalarFieldEnum | CommunityVideosScalarFieldEnum[]
  }

  /**
   * CommunityVideos findFirstOrThrow
   */
  export type CommunityVideosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVideos
     */
    select?: CommunityVideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVideos
     */
    omit?: CommunityVideosOmit<ExtArgs> | null
    /**
     * Filter, which CommunityVideos to fetch.
     */
    where?: CommunityVideosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityVideos to fetch.
     */
    orderBy?: CommunityVideosOrderByWithRelationInput | CommunityVideosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityVideos.
     */
    cursor?: CommunityVideosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityVideos.
     */
    distinct?: CommunityVideosScalarFieldEnum | CommunityVideosScalarFieldEnum[]
  }

  /**
   * CommunityVideos findMany
   */
  export type CommunityVideosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVideos
     */
    select?: CommunityVideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVideos
     */
    omit?: CommunityVideosOmit<ExtArgs> | null
    /**
     * Filter, which CommunityVideos to fetch.
     */
    where?: CommunityVideosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityVideos to fetch.
     */
    orderBy?: CommunityVideosOrderByWithRelationInput | CommunityVideosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunityVideos.
     */
    cursor?: CommunityVideosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityVideos.
     */
    skip?: number
    distinct?: CommunityVideosScalarFieldEnum | CommunityVideosScalarFieldEnum[]
  }

  /**
   * CommunityVideos create
   */
  export type CommunityVideosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVideos
     */
    select?: CommunityVideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVideos
     */
    omit?: CommunityVideosOmit<ExtArgs> | null
    /**
     * The data needed to create a CommunityVideos.
     */
    data?: XOR<CommunityVideosCreateInput, CommunityVideosUncheckedCreateInput>
  }

  /**
   * CommunityVideos createMany
   */
  export type CommunityVideosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunityVideos.
     */
    data: CommunityVideosCreateManyInput | CommunityVideosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunityVideos createManyAndReturn
   */
  export type CommunityVideosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVideos
     */
    select?: CommunityVideosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVideos
     */
    omit?: CommunityVideosOmit<ExtArgs> | null
    /**
     * The data used to create many CommunityVideos.
     */
    data: CommunityVideosCreateManyInput | CommunityVideosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunityVideos update
   */
  export type CommunityVideosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVideos
     */
    select?: CommunityVideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVideos
     */
    omit?: CommunityVideosOmit<ExtArgs> | null
    /**
     * The data needed to update a CommunityVideos.
     */
    data: XOR<CommunityVideosUpdateInput, CommunityVideosUncheckedUpdateInput>
    /**
     * Choose, which CommunityVideos to update.
     */
    where: CommunityVideosWhereUniqueInput
  }

  /**
   * CommunityVideos updateMany
   */
  export type CommunityVideosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunityVideos.
     */
    data: XOR<CommunityVideosUpdateManyMutationInput, CommunityVideosUncheckedUpdateManyInput>
    /**
     * Filter which CommunityVideos to update
     */
    where?: CommunityVideosWhereInput
    /**
     * Limit how many CommunityVideos to update.
     */
    limit?: number
  }

  /**
   * CommunityVideos updateManyAndReturn
   */
  export type CommunityVideosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVideos
     */
    select?: CommunityVideosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVideos
     */
    omit?: CommunityVideosOmit<ExtArgs> | null
    /**
     * The data used to update CommunityVideos.
     */
    data: XOR<CommunityVideosUpdateManyMutationInput, CommunityVideosUncheckedUpdateManyInput>
    /**
     * Filter which CommunityVideos to update
     */
    where?: CommunityVideosWhereInput
    /**
     * Limit how many CommunityVideos to update.
     */
    limit?: number
  }

  /**
   * CommunityVideos upsert
   */
  export type CommunityVideosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVideos
     */
    select?: CommunityVideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVideos
     */
    omit?: CommunityVideosOmit<ExtArgs> | null
    /**
     * The filter to search for the CommunityVideos to update in case it exists.
     */
    where: CommunityVideosWhereUniqueInput
    /**
     * In case the CommunityVideos found by the `where` argument doesn't exist, create a new CommunityVideos with this data.
     */
    create: XOR<CommunityVideosCreateInput, CommunityVideosUncheckedCreateInput>
    /**
     * In case the CommunityVideos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityVideosUpdateInput, CommunityVideosUncheckedUpdateInput>
  }

  /**
   * CommunityVideos delete
   */
  export type CommunityVideosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVideos
     */
    select?: CommunityVideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVideos
     */
    omit?: CommunityVideosOmit<ExtArgs> | null
    /**
     * Filter which CommunityVideos to delete.
     */
    where: CommunityVideosWhereUniqueInput
  }

  /**
   * CommunityVideos deleteMany
   */
  export type CommunityVideosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityVideos to delete
     */
    where?: CommunityVideosWhereInput
    /**
     * Limit how many CommunityVideos to delete.
     */
    limit?: number
  }

  /**
   * CommunityVideos without action
   */
  export type CommunityVideosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVideos
     */
    select?: CommunityVideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVideos
     */
    omit?: CommunityVideosOmit<ExtArgs> | null
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
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClientSessionsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    thumbnail: 'thumbnail',
    url: 'url',
    duration: 'duration',
    date: 'date',
    userId: 'userId'
  };

  export type ClientSessionsScalarFieldEnum = (typeof ClientSessionsScalarFieldEnum)[keyof typeof ClientSessionsScalarFieldEnum]


  export const CommunityVideosScalarFieldEnum: {
    id: 'id',
    title: 'title',
    thumbnail: 'thumbnail',
    url: 'url',
    duration: 'duration',
    date: 'date'
  };

  export type CommunityVideosScalarFieldEnum = (typeof CommunityVideosScalarFieldEnum)[keyof typeof CommunityVideosScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
    name?: StringNullableFilter<"User"> | string | null
    sessions?: ClientSessionsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    sessions?: ClientSessionsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    sessions?: ClientSessionsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
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
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ClientSessionsWhereInput = {
    AND?: ClientSessionsWhereInput | ClientSessionsWhereInput[]
    OR?: ClientSessionsWhereInput[]
    NOT?: ClientSessionsWhereInput | ClientSessionsWhereInput[]
    id?: IntFilter<"ClientSessions"> | number
    title?: StringNullableFilter<"ClientSessions"> | string | null
    thumbnail?: StringNullableFilter<"ClientSessions"> | string | null
    url?: StringNullableFilter<"ClientSessions"> | string | null
    duration?: StringNullableFilter<"ClientSessions"> | string | null
    date?: DateTimeFilter<"ClientSessions"> | Date | string
    userId?: IntFilter<"ClientSessions"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ClientSessionsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    date?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ClientSessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClientSessionsWhereInput | ClientSessionsWhereInput[]
    OR?: ClientSessionsWhereInput[]
    NOT?: ClientSessionsWhereInput | ClientSessionsWhereInput[]
    title?: StringNullableFilter<"ClientSessions"> | string | null
    thumbnail?: StringNullableFilter<"ClientSessions"> | string | null
    url?: StringNullableFilter<"ClientSessions"> | string | null
    duration?: StringNullableFilter<"ClientSessions"> | string | null
    date?: DateTimeFilter<"ClientSessions"> | Date | string
    userId?: IntFilter<"ClientSessions"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ClientSessionsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    date?: SortOrder
    userId?: SortOrder
    _count?: ClientSessionsCountOrderByAggregateInput
    _avg?: ClientSessionsAvgOrderByAggregateInput
    _max?: ClientSessionsMaxOrderByAggregateInput
    _min?: ClientSessionsMinOrderByAggregateInput
    _sum?: ClientSessionsSumOrderByAggregateInput
  }

  export type ClientSessionsScalarWhereWithAggregatesInput = {
    AND?: ClientSessionsScalarWhereWithAggregatesInput | ClientSessionsScalarWhereWithAggregatesInput[]
    OR?: ClientSessionsScalarWhereWithAggregatesInput[]
    NOT?: ClientSessionsScalarWhereWithAggregatesInput | ClientSessionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClientSessions"> | number
    title?: StringNullableWithAggregatesFilter<"ClientSessions"> | string | null
    thumbnail?: StringNullableWithAggregatesFilter<"ClientSessions"> | string | null
    url?: StringNullableWithAggregatesFilter<"ClientSessions"> | string | null
    duration?: StringNullableWithAggregatesFilter<"ClientSessions"> | string | null
    date?: DateTimeWithAggregatesFilter<"ClientSessions"> | Date | string
    userId?: IntWithAggregatesFilter<"ClientSessions"> | number
  }

  export type CommunityVideosWhereInput = {
    AND?: CommunityVideosWhereInput | CommunityVideosWhereInput[]
    OR?: CommunityVideosWhereInput[]
    NOT?: CommunityVideosWhereInput | CommunityVideosWhereInput[]
    id?: IntFilter<"CommunityVideos"> | number
    title?: StringNullableFilter<"CommunityVideos"> | string | null
    thumbnail?: StringNullableFilter<"CommunityVideos"> | string | null
    url?: StringNullableFilter<"CommunityVideos"> | string | null
    duration?: StringNullableFilter<"CommunityVideos"> | string | null
    date?: DateTimeFilter<"CommunityVideos"> | Date | string
  }

  export type CommunityVideosOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    date?: SortOrder
  }

  export type CommunityVideosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommunityVideosWhereInput | CommunityVideosWhereInput[]
    OR?: CommunityVideosWhereInput[]
    NOT?: CommunityVideosWhereInput | CommunityVideosWhereInput[]
    title?: StringNullableFilter<"CommunityVideos"> | string | null
    thumbnail?: StringNullableFilter<"CommunityVideos"> | string | null
    url?: StringNullableFilter<"CommunityVideos"> | string | null
    duration?: StringNullableFilter<"CommunityVideos"> | string | null
    date?: DateTimeFilter<"CommunityVideos"> | Date | string
  }, "id">

  export type CommunityVideosOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    date?: SortOrder
    _count?: CommunityVideosCountOrderByAggregateInput
    _avg?: CommunityVideosAvgOrderByAggregateInput
    _max?: CommunityVideosMaxOrderByAggregateInput
    _min?: CommunityVideosMinOrderByAggregateInput
    _sum?: CommunityVideosSumOrderByAggregateInput
  }

  export type CommunityVideosScalarWhereWithAggregatesInput = {
    AND?: CommunityVideosScalarWhereWithAggregatesInput | CommunityVideosScalarWhereWithAggregatesInput[]
    OR?: CommunityVideosScalarWhereWithAggregatesInput[]
    NOT?: CommunityVideosScalarWhereWithAggregatesInput | CommunityVideosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CommunityVideos"> | number
    title?: StringNullableWithAggregatesFilter<"CommunityVideos"> | string | null
    thumbnail?: StringNullableWithAggregatesFilter<"CommunityVideos"> | string | null
    url?: StringNullableWithAggregatesFilter<"CommunityVideos"> | string | null
    duration?: StringNullableWithAggregatesFilter<"CommunityVideos"> | string | null
    date?: DateTimeWithAggregatesFilter<"CommunityVideos"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    sessions?: ClientSessionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    sessions?: ClientSessionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: ClientSessionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: ClientSessionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientSessionsCreateInput = {
    title?: string | null
    thumbnail?: string | null
    url?: string | null
    duration?: string | null
    date?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type ClientSessionsUncheckedCreateInput = {
    id?: number
    title?: string | null
    thumbnail?: string | null
    url?: string | null
    duration?: string | null
    date?: Date | string
    userId: number
  }

  export type ClientSessionsUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type ClientSessionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ClientSessionsCreateManyInput = {
    id?: number
    title?: string | null
    thumbnail?: string | null
    url?: string | null
    duration?: string | null
    date?: Date | string
    userId: number
  }

  export type ClientSessionsUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientSessionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommunityVideosCreateInput = {
    title?: string | null
    thumbnail?: string | null
    url?: string | null
    duration?: string | null
    date?: Date | string
  }

  export type CommunityVideosUncheckedCreateInput = {
    id?: number
    title?: string | null
    thumbnail?: string | null
    url?: string | null
    duration?: string | null
    date?: Date | string
  }

  export type CommunityVideosUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityVideosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityVideosCreateManyInput = {
    id?: number
    title?: string | null
    thumbnail?: string | null
    url?: string | null
    duration?: string | null
    date?: Date | string
  }

  export type CommunityVideosUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityVideosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ClientSessionsListRelationFilter = {
    every?: ClientSessionsWhereInput
    some?: ClientSessionsWhereInput
    none?: ClientSessionsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClientSessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ClientSessionsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    url?: SortOrder
    duration?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type ClientSessionsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ClientSessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    url?: SortOrder
    duration?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type ClientSessionsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    url?: SortOrder
    duration?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type ClientSessionsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type CommunityVideosCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    url?: SortOrder
    duration?: SortOrder
    date?: SortOrder
  }

  export type CommunityVideosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CommunityVideosMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    url?: SortOrder
    duration?: SortOrder
    date?: SortOrder
  }

  export type CommunityVideosMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    url?: SortOrder
    duration?: SortOrder
    date?: SortOrder
  }

  export type CommunityVideosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClientSessionsCreateNestedManyWithoutUserInput = {
    create?: XOR<ClientSessionsCreateWithoutUserInput, ClientSessionsUncheckedCreateWithoutUserInput> | ClientSessionsCreateWithoutUserInput[] | ClientSessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientSessionsCreateOrConnectWithoutUserInput | ClientSessionsCreateOrConnectWithoutUserInput[]
    createMany?: ClientSessionsCreateManyUserInputEnvelope
    connect?: ClientSessionsWhereUniqueInput | ClientSessionsWhereUniqueInput[]
  }

  export type ClientSessionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ClientSessionsCreateWithoutUserInput, ClientSessionsUncheckedCreateWithoutUserInput> | ClientSessionsCreateWithoutUserInput[] | ClientSessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientSessionsCreateOrConnectWithoutUserInput | ClientSessionsCreateOrConnectWithoutUserInput[]
    createMany?: ClientSessionsCreateManyUserInputEnvelope
    connect?: ClientSessionsWhereUniqueInput | ClientSessionsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ClientSessionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClientSessionsCreateWithoutUserInput, ClientSessionsUncheckedCreateWithoutUserInput> | ClientSessionsCreateWithoutUserInput[] | ClientSessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientSessionsCreateOrConnectWithoutUserInput | ClientSessionsCreateOrConnectWithoutUserInput[]
    upsert?: ClientSessionsUpsertWithWhereUniqueWithoutUserInput | ClientSessionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClientSessionsCreateManyUserInputEnvelope
    set?: ClientSessionsWhereUniqueInput | ClientSessionsWhereUniqueInput[]
    disconnect?: ClientSessionsWhereUniqueInput | ClientSessionsWhereUniqueInput[]
    delete?: ClientSessionsWhereUniqueInput | ClientSessionsWhereUniqueInput[]
    connect?: ClientSessionsWhereUniqueInput | ClientSessionsWhereUniqueInput[]
    update?: ClientSessionsUpdateWithWhereUniqueWithoutUserInput | ClientSessionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClientSessionsUpdateManyWithWhereWithoutUserInput | ClientSessionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClientSessionsScalarWhereInput | ClientSessionsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClientSessionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClientSessionsCreateWithoutUserInput, ClientSessionsUncheckedCreateWithoutUserInput> | ClientSessionsCreateWithoutUserInput[] | ClientSessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientSessionsCreateOrConnectWithoutUserInput | ClientSessionsCreateOrConnectWithoutUserInput[]
    upsert?: ClientSessionsUpsertWithWhereUniqueWithoutUserInput | ClientSessionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClientSessionsCreateManyUserInputEnvelope
    set?: ClientSessionsWhereUniqueInput | ClientSessionsWhereUniqueInput[]
    disconnect?: ClientSessionsWhereUniqueInput | ClientSessionsWhereUniqueInput[]
    delete?: ClientSessionsWhereUniqueInput | ClientSessionsWhereUniqueInput[]
    connect?: ClientSessionsWhereUniqueInput | ClientSessionsWhereUniqueInput[]
    update?: ClientSessionsUpdateWithWhereUniqueWithoutUserInput | ClientSessionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClientSessionsUpdateManyWithWhereWithoutUserInput | ClientSessionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClientSessionsScalarWhereInput | ClientSessionsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type ClientSessionsCreateWithoutUserInput = {
    title?: string | null
    thumbnail?: string | null
    url?: string | null
    duration?: string | null
    date?: Date | string
  }

  export type ClientSessionsUncheckedCreateWithoutUserInput = {
    id?: number
    title?: string | null
    thumbnail?: string | null
    url?: string | null
    duration?: string | null
    date?: Date | string
  }

  export type ClientSessionsCreateOrConnectWithoutUserInput = {
    where: ClientSessionsWhereUniqueInput
    create: XOR<ClientSessionsCreateWithoutUserInput, ClientSessionsUncheckedCreateWithoutUserInput>
  }

  export type ClientSessionsCreateManyUserInputEnvelope = {
    data: ClientSessionsCreateManyUserInput | ClientSessionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ClientSessionsUpsertWithWhereUniqueWithoutUserInput = {
    where: ClientSessionsWhereUniqueInput
    update: XOR<ClientSessionsUpdateWithoutUserInput, ClientSessionsUncheckedUpdateWithoutUserInput>
    create: XOR<ClientSessionsCreateWithoutUserInput, ClientSessionsUncheckedCreateWithoutUserInput>
  }

  export type ClientSessionsUpdateWithWhereUniqueWithoutUserInput = {
    where: ClientSessionsWhereUniqueInput
    data: XOR<ClientSessionsUpdateWithoutUserInput, ClientSessionsUncheckedUpdateWithoutUserInput>
  }

  export type ClientSessionsUpdateManyWithWhereWithoutUserInput = {
    where: ClientSessionsScalarWhereInput
    data: XOR<ClientSessionsUpdateManyMutationInput, ClientSessionsUncheckedUpdateManyWithoutUserInput>
  }

  export type ClientSessionsScalarWhereInput = {
    AND?: ClientSessionsScalarWhereInput | ClientSessionsScalarWhereInput[]
    OR?: ClientSessionsScalarWhereInput[]
    NOT?: ClientSessionsScalarWhereInput | ClientSessionsScalarWhereInput[]
    id?: IntFilter<"ClientSessions"> | number
    title?: StringNullableFilter<"ClientSessions"> | string | null
    thumbnail?: StringNullableFilter<"ClientSessions"> | string | null
    url?: StringNullableFilter<"ClientSessions"> | string | null
    duration?: StringNullableFilter<"ClientSessions"> | string | null
    date?: DateTimeFilter<"ClientSessions"> | Date | string
    userId?: IntFilter<"ClientSessions"> | number
  }

  export type UserCreateWithoutSessionsInput = {
    email: string
    name?: string | null
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: number
    email: string
    name?: string | null
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientSessionsCreateManyUserInput = {
    id?: number
    title?: string | null
    thumbnail?: string | null
    url?: string | null
    duration?: string | null
    date?: Date | string
  }

  export type ClientSessionsUpdateWithoutUserInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientSessionsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientSessionsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
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