"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  endpoint: "https://us1.prisma.sh/jonatan-ramhoj-d013c3/sick-fits/dev"
});
exports.prisma = new exports.Prisma();
