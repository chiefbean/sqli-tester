import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SyntaxService {

  reservedWords: Array<string> = [
    "ABORT",
    "INTERVAL",
    "PRESERVE",
    "ALL",
    "DECODE",
    "INTO",
    "PRIMARY",
    "ALLOCATE",
    "DEFAULT",
    "LEADING",
    "RESET",
    "ANALYSE",
    "DESC",
    "LEFT",
    "REUSE",
    "ANALYZE",
    "DISTINCT",
    "LIKE",
    "RIGHT",
    "AND",
    "DISTRIBUTE",
    "LIMIT",
    "ROWS",
    "ANY",
    "DO",
    "LOAD",
    "SELECT",
    "AS",
    "ELSE",
    "LOCAL",
    "SESSION_USER",
    "ASC",
    "END",
    "LOCK",
    "SETOF",
    "BETWEEN",
    "EXCEPT",
    "MINUS",
    "SHOW",
    "EXCLUDE",
    "MOVE",
    "SOME",
    "EXISTS",
    "NATURAL",
    "TABLE",
    "BOTH",
    "EXPLAIN",
    "THEN",
    "CASE",
    "EXPRESS",
    "NEW",
    "TIES",
    "CAST",
    "EXTEND",
    "NOT",
    "EXTERNAL",
    "NOTNULL",
    "EXTRACT",
    "NULL",
    "TO",
    "CHECK",
    "FALSE",
    "NULLS",
    "TRAILING",
    "CLUSTER",
    "FIRST",
    "TRANSACTION",
    "COALESCE",
    "NVL",
    "TRIGGER",
    "COLLATE",
    "FOLLOWING",
    "NVL2",
    "TRIM",
    "COLLATION",
    "FOR",
    "OFF",
    "TRUE",
    "COLUMN",
    "FOREIGN",
    "OFFSET",
    "UNBOUNDED",
    "CONSTRAINT",
    "FROM",
    "OLD",
    "UNION",
    "COPY",
    "FULL",
    "ON",
    "UNIQUE",
    "CROSS",
    "FUNCTION",
    "ONLINE",
    "USER",
    "CURRENT",
    "GENSTATS",
    "ONLY",
    "USING",
    "CURRENT_CATALOG",
    "GLOBAL",
    "OR",
    "VACUUM",
    "CURRENT_DATE",
    "GROUP",
    "ORDER",
    "CURRENT_DB",
    "HAVING",
    "OTHERS",
    "VERBOSE",
    "CURRENT_SCHEMA",
    "IDENTIFIER_CASE",
    "OUT",
    "VERSION",
    "CURRENT_SID",
    "ILIKE",
    "OUTER",
    "VIEW",
    "CURRENT_TIME",
    "IN",
    "OVER",
    "WHEN",
    "CURRENT_TIMESTAMP",
    "INDEX",
    "OVERLAPS",
    "WHERE",
    "CURRENT_USER",
    "INITIALLY",
    "PARTITION",
    "WITH",
    "CURRENT_USERID",
    "INNER",
    "POSITION",
    "WRITE",
    "CURRENT_USEROID",
    "INOUT",
    "PRECEDING",
    "RESET",
    "DEALLOCATE",
    "INTERSECT",
    "PRECISION",
    "REUSE",
    "INSERT",
    "VALUES",
    "DATABASES",
    "TABLES",
    "COLUMNS",
    "CREATE",
    "IF",
    "BY"
  ];
  dataTypes: Array<string> = [
    "BIGINT",
    "INT",
    "SMALLINT",
    "TINYINT",
    "BIT",
    "DECIMAL",
    "NUMERIC",
    "MONEY",
    "SMALLMONEY",
    "FLOAT",
    "REAL",
    "DATETIME",
    "SMALLDATETIME",
    "DATE",
    "TIME",
    "CHAR",
    "VARCHAR",
    "TEXT",
    "BLOB",
    "STRING",
    "NCHAR",
    "NVARCHAR",
    "NTEXT",
    "BINARY",
    "VARBINARY",
    "IMAGE",
    "SQL_VARIANT",
    "TIMESTAMP",
    "UNIQUEIDENTIFIER",
    "XML",
    "CURSOR"
  ];

  specialChars = "`!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?~";
  includeChars = "'\"&%!|@#";
  excludeChars = "`$^*()_+\-=\[\]{};:\\,.<>\/?~";

  constructor() { }

  tokenize(query: string) {
    var output: Array<Token> = [];
    var lines = query.split("\n");

    lines.forEach((line) => {
      var words = line.split(" ");
      var comment = [false, ""];
      var str = [false, ""];

      words.forEach((word) => {
        var clean = word;
        if (word.includes('#') || word.includes("--")) {
          if (!comment[0]) comment[0] = true;
          comment[1] += clean;
        }
        else if (this.reservedWord(clean)) output.push({content: clean, type: "word"});
        else if (this.dataType(clean)) output.push({content: clean, type: "type"});
        else output.push({content: clean, type: "none"});
        output.push({content: " ", type: "none"});
      });
      if (comment[0]) {
        output.push({content: String(comment[1]), type: "comment"});
      }
      output.push({content: "\n", type: "none"});
    });

    return output;
  }

  // cleanWord(word: string) {
  //   if (this.specialChars.test(word)) {
  //     var clean = "";
  //     for(var i = 0; i < word.length; i++) {
  //       if (this.includeChars.test(word[i])) {
  //         clean += word[i];
  //       } else if (this.excludeChars.test(word[i])) {
  //         continue;
  //       } else {
  //         clean += word[i];
  //       }
  //     }
  //     return clean;
  //   } else {
  //     return word;
  //   }
  // }

  reservedWord(word: string) {
    return this.reservedWords.includes(word.toUpperCase());
  }

  dataType(word: string) {
    return this.dataTypes.includes(word.toUpperCase());
  }
}

export interface Token {
  content: string;
  type: string;
}