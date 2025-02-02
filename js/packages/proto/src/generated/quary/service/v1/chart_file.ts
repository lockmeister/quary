/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Struct } from "../../../google/protobuf/struct";

export const protobufPackage = "quary.service.v1";

/** CharFile is a representation of a chart that can be used to generate a visualization. */
export interface ChartFile {
  /** description of the cart */
  description?:
    | string
    | undefined;
  /**
   * Tags are used to group different parts of the project together. For example, you could tag all models that are
   * related to a specific department with the same tag.
   */
  tags: string[];
  source?:
    | { $case: "rawSql"; rawSql: string }
    | { $case: "preTemplatedSql"; preTemplatedSql: string }
    | { $case: "reference"; reference: ChartFile_AssetReference }
    | undefined;
  /** Configuration for the chart that is passed to perspective */
  config: { [key: string]: any } | undefined;
}

export interface ChartFile_AssetReference {
  name: string;
}

function createBaseChartFile(): ChartFile {
  return { description: undefined, tags: [], source: undefined, config: undefined };
}

export const ChartFile = {
  encode(message: ChartFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.tags) {
      writer.uint32(26).string(v!);
    }
    switch (message.source?.$case) {
      case "rawSql":
        writer.uint32(34).string(message.source.rawSql);
        break;
      case "preTemplatedSql":
        writer.uint32(42).string(message.source.preTemplatedSql);
        break;
      case "reference":
        ChartFile_AssetReference.encode(message.source.reference, writer.uint32(50).fork()).ldelim();
        break;
    }
    if (message.config !== undefined) {
      Struct.encode(Struct.wrap(message.config), writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChartFile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChartFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.source = { $case: "rawSql", rawSql: reader.string() };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.source = { $case: "preTemplatedSql", preTemplatedSql: reader.string() };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.source = { $case: "reference", reference: ChartFile_AssetReference.decode(reader, reader.uint32()) };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.config = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChartFile {
    return {
      description: isSet(object.description) ? gt.String(object.description) : undefined,
      tags: gt.Array.isArray(object?.tags) ? object.tags.map((e: any) => gt.String(e)) : [],
      source: isSet(object.rawSql)
        ? { $case: "rawSql", rawSql: gt.String(object.rawSql) }
        : isSet(object.preTemplatedSql)
        ? { $case: "preTemplatedSql", preTemplatedSql: gt.String(object.preTemplatedSql) }
        : isSet(object.reference)
        ? { $case: "reference", reference: ChartFile_AssetReference.fromJSON(object.reference) }
        : undefined,
      config: isObject(object.config) ? object.config : undefined,
    };
  },

  toJSON(message: ChartFile): unknown {
    const obj: any = {};
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    if (message.tags?.length) {
      obj.tags = message.tags;
    }
    if (message.source?.$case === "rawSql") {
      obj.rawSql = message.source.rawSql;
    }
    if (message.source?.$case === "preTemplatedSql") {
      obj.preTemplatedSql = message.source.preTemplatedSql;
    }
    if (message.source?.$case === "reference") {
      obj.reference = ChartFile_AssetReference.toJSON(message.source.reference);
    }
    if (message.config !== undefined) {
      obj.config = message.config;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChartFile>, I>>(base?: I): ChartFile {
    return ChartFile.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChartFile>, I>>(object: I): ChartFile {
    const message = createBaseChartFile();
    message.description = object.description ?? undefined;
    message.tags = object.tags?.map((e) => e) || [];
    if (object.source?.$case === "rawSql" && object.source?.rawSql !== undefined && object.source?.rawSql !== null) {
      message.source = { $case: "rawSql", rawSql: object.source.rawSql };
    }
    if (
      object.source?.$case === "preTemplatedSql" &&
      object.source?.preTemplatedSql !== undefined &&
      object.source?.preTemplatedSql !== null
    ) {
      message.source = { $case: "preTemplatedSql", preTemplatedSql: object.source.preTemplatedSql };
    }
    if (
      object.source?.$case === "reference" &&
      object.source?.reference !== undefined &&
      object.source?.reference !== null
    ) {
      message.source = { $case: "reference", reference: ChartFile_AssetReference.fromPartial(object.source.reference) };
    }
    message.config = object.config ?? undefined;
    return message;
  },
};

function createBaseChartFile_AssetReference(): ChartFile_AssetReference {
  return { name: "" };
}

export const ChartFile_AssetReference = {
  encode(message: ChartFile_AssetReference, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChartFile_AssetReference {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChartFile_AssetReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChartFile_AssetReference {
    return { name: isSet(object.name) ? gt.String(object.name) : "" };
  },

  toJSON(message: ChartFile_AssetReference): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChartFile_AssetReference>, I>>(base?: I): ChartFile_AssetReference {
    return ChartFile_AssetReference.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChartFile_AssetReference>, I>>(object: I): ChartFile_AssetReference {
    const message = createBaseChartFile_AssetReference();
    message.name = object.name ?? "";
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const gt: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
