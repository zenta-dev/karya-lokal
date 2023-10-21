"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const _1 = require(".");
const categories = [
    {
        name: "Pakaian",
        slug: "pakaian",
        parentSlug: null,
        level: 0,
    },
    {
        name: "Pakaian Pria",
        slug: "pakaian;pria",
        parentSlug: "pakaian",
        level: 1,
    },
    {
        name: "Pakaian Wanita",
        slug: "pakaian;wanita",
        parentSlug: "pakaian",
        level: 1,
    },
    {
        name: "Pakaian Anak",
        slug: "pakaian;anak",
        parentSlug: "pakaian",
        level: 1,
    },
    {
        name: "Pakaian Anak Laki-laki",
        slug: "pakaian;anak;laki-laki",
        parentSlug: "pakaian;anak",
        level: 2,
    },
    {
        name: "Pakaian Anak Perempuan",
        slug: "pakaian;anak;perempuan",
        parentSlug: "pakaian;anak",
        level: 2,
    },
];
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            for (const category of categories) {
                yield _1.prisma.category.upsert({
                    where: { slug: category.slug },
                    update: {
                        name: category.name,
                        slug: category.slug,
                        parentSlug: category.parentSlug,
                        level: category.level,
                    },
                    create: category,
                });
            }
        }
        catch (error) { }
    });
}
exports.seed = seed;
