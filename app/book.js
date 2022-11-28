"use strict";

var $protobuf = require("protobufjs/minimal");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.com = (function() {
    var com = {};

    com.book = (function() {

        var book = {};

        book.Book = (function() {

            function Book(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            Book.prototype.isbn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            Book.prototype.title = "";
            Book.prototype.author = "";
            Book.create = function create(properties) {
                return new Book(properties);
            };
            Book.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.isbn != null && message.hasOwnProperty("isbn"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.isbn);
                if (message.title != null && message.hasOwnProperty("title"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
                if (message.author != null && message.hasOwnProperty("author"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.author);
                return writer;
            };
            Book.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            Book.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.book.Book();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.isbn = reader.int64();
                        break;
                    case 2:
                        message.title = reader.string();
                        break;
                    case 3:
                        message.author = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
            Book.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            Book.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.isbn != null && message.hasOwnProperty("isbn"))
                    if (!$util.isInteger(message.isbn) && !(message.isbn && $util.isInteger(message.isbn.low) && $util.isInteger(message.isbn.high)))
                        return "isbn: integer|Long expected";
                if (message.title != null && message.hasOwnProperty("title"))
                    if (!$util.isString(message.title))
                        return "title: string expected";
                if (message.author != null && message.hasOwnProperty("author"))
                    if (!$util.isString(message.author))
                        return "author: string expected";
                return null;
            };
            Book.fromObject = function fromObject(object) {
                if (object instanceof $root.com.book.Book)
                    return object;
                var message = new $root.com.book.Book();
                if (object.isbn != null)
                    if ($util.Long)
                        (message.isbn = $util.Long.fromValue(object.isbn)).unsigned = false;
                    else if (typeof object.isbn === "string")
                        message.isbn = parseInt(object.isbn, 10);
                    else if (typeof object.isbn === "number")
                        message.isbn = object.isbn;
                    else if (typeof object.isbn === "object")
                        message.isbn = new $util.LongBits(object.isbn.low >>> 0, object.isbn.high >>> 0).toNumber();
                if (object.title != null)
                    message.title = String(object.title);
                if (object.author != null)
                    message.author = String(object.author);
                return message;
            };
            Book.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.isbn = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.isbn = options.longs === String ? "0" : 0;
                    object.title = "";
                    object.author = "";
                }
                if (message.isbn != null && message.hasOwnProperty("isbn"))
                    if (typeof message.isbn === "number")
                        object.isbn = options.longs === String ? String(message.isbn) : message.isbn;
                    else
                        object.isbn = options.longs === String ? $util.Long.prototype.toString.call(message.isbn) : options.longs === Number ? new $util.LongBits(message.isbn.low >>> 0, message.isbn.high >>> 0).toNumber() : message.isbn;
                if (message.title != null && message.hasOwnProperty("title"))
                    object.title = message.title;
                if (message.author != null && message.hasOwnProperty("author"))
                    object.author = message.author;
                return object;
            };
            Book.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Book;
        })();

        book.GetBookRequest = (function() {
            function GetBookRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            GetBookRequest.prototype.isbn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            GetBookRequest.create = function create(properties) {
                return new GetBookRequest(properties);
            };
            GetBookRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.isbn != null && message.hasOwnProperty("isbn"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.isbn);
                return writer;
            };
            GetBookRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            GetBookRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.book.GetBookRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.isbn = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
            GetBookRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            GetBookRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.isbn != null && message.hasOwnProperty("isbn"))
                    if (!$util.isInteger(message.isbn) && !(message.isbn && $util.isInteger(message.isbn.low) && $util.isInteger(message.isbn.high)))
                        return "isbn: integer|Long expected";
                return null;
            };
            GetBookRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.com.book.GetBookRequest)
                    return object;
                var message = new $root.com.book.GetBookRequest();
                if (object.isbn != null)
                    if ($util.Long)
                        (message.isbn = $util.Long.fromValue(object.isbn)).unsigned = false;
                    else if (typeof object.isbn === "string")
                        message.isbn = parseInt(object.isbn, 10);
                    else if (typeof object.isbn === "number")
                        message.isbn = object.isbn;
                    else if (typeof object.isbn === "object")
                        message.isbn = new $util.LongBits(object.isbn.low >>> 0, object.isbn.high >>> 0).toNumber();
                return message;
            };
            GetBookRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.isbn = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.isbn = options.longs === String ? "0" : 0;
                if (message.isbn != null && message.hasOwnProperty("isbn"))
                    if (typeof message.isbn === "number")
                        object.isbn = options.longs === String ? String(message.isbn) : message.isbn;
                    else
                        object.isbn = options.longs === String ? $util.Long.prototype.toString.call(message.isbn) : options.longs === Number ? new $util.LongBits(message.isbn.low >>> 0, message.isbn.high >>> 0).toNumber() : message.isbn;
                return object;
            };
            GetBookRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetBookRequest;
        })();

        book.GetBookViaAuthor = (function() {
            function GetBookViaAuthor(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            GetBookViaAuthor.prototype.author = "";
            GetBookViaAuthor.create = function create(properties) {
                return new GetBookViaAuthor(properties);
            };
            GetBookViaAuthor.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.author != null && message.hasOwnProperty("author"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.author);
                return writer;
            };
            GetBookViaAuthor.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            GetBookViaAuthor.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.book.GetBookViaAuthor();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.author = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
            GetBookViaAuthor.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            GetBookViaAuthor.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.author != null && message.hasOwnProperty("author"))
                    if (!$util.isString(message.author))
                        return "author: string expected";
                return null;
            };
            GetBookViaAuthor.fromObject = function fromObject(object) {
                if (object instanceof $root.com.book.GetBookViaAuthor)
                    return object;
                var message = new $root.com.book.GetBookViaAuthor();
                if (object.author != null)
                    message.author = String(object.author);
                return message;
            };
            GetBookViaAuthor.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.author = "";
                if (message.author != null && message.hasOwnProperty("author"))
                    object.author = message.author;
                return object;
            };
            GetBookViaAuthor.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetBookViaAuthor;
        })();

        book.BookService = (function() {
            function BookService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (BookService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = BookService;
            BookService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };
            BookService.prototype.getBook = function getBook(request, callback) {
                return this.rpcCall(getBook, $root.com.book.GetBookRequest, $root.com.book.Book, request, callback);
            };
            BookService.prototype.getBooksViaAuthor = function getBooksViaAuthor(request, callback) {
                return this.rpcCall(getBooksViaAuthor, $root.com.book.GetBookViaAuthor, $root.com.book.Book, request, callback);
            };
            BookService.prototype.getGreatestBook = function getGreatestBook(request, callback) {
                return this.rpcCall(getGreatestBook, $root.com.book.GetBookRequest, $root.com.book.Book, request, callback);
            };

            /**
             * Calls GetGreatestBook.
             * @function getGreatestBook
             * @memberof com.book.BookService
             * @instance
             * @param {com.book.IGetBookRequest} request GetBookRequest message or plain object
             * @returns {Promise<com.book.Book>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link com.book.BookService#getBooks}.
             * @memberof com.book.BookService
             * @typedef GetBooksCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {com.book.Book} [response] Book
             */

            /**
             * Calls GetBooks.
             * @function getBooks
             * @memberof com.book.BookService
             * @instance
             * @param {com.book.IGetBookRequest} request GetBookRequest message or plain object
             * @param {com.book.BookService.GetBooksCallback} callback Node-style callback called with the error, if any, and Book
             * @returns {undefined}
             * @variation 1
             */
            BookService.prototype.getBooks = function getBooks(request, callback) {
                return this.rpcCall(getBooks, $root.com.book.GetBookRequest, $root.com.book.Book, request, callback);
            };

            /**
             * Calls GetBooks.
             * @function getBooks
             * @memberof com.book.BookService
             * @instance
             * @param {com.book.IGetBookRequest} request GetBookRequest message or plain object
             * @returns {Promise<com.book.Book>} Promise
             * @variation 2
             */

            return BookService;
        })();

        book.BookStore = (function() {

            /**
             * Properties of a BookStore.
             * @memberof com.book
             * @interface IBookStore
             * @property {string|null} [name] BookStore name
             * @property {Object.<string,string>|null} [books] BookStore books
             */

            /**
             * Constructs a new BookStore.
             * @memberof com.book
             * @classdesc Represents a BookStore.
             * @implements IBookStore
             * @constructor
             * @param {com.book.IBookStore=} [properties] Properties to set
             */
            function BookStore(properties) {
                this.books = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BookStore name.
             * @member {string} name
             * @memberof com.book.BookStore
             * @instance
             */
            BookStore.prototype.name = "";

            /**
             * BookStore books.
             * @member {Object.<string,string>} books
             * @memberof com.book.BookStore
             * @instance
             */
            BookStore.prototype.books = $util.emptyObject;

            /**
             * Creates a new BookStore instance using the specified properties.
             * @function create
             * @memberof com.book.BookStore
             * @static
             * @param {com.book.IBookStore=} [properties] Properties to set
             * @returns {com.book.BookStore} BookStore instance
             */
            BookStore.create = function create(properties) {
                return new BookStore(properties);
            };

            /**
             * Encodes the specified BookStore message. Does not implicitly {@link com.book.BookStore.verify|verify} messages.
             * @function encode
             * @memberof com.book.BookStore
             * @static
             * @param {com.book.IBookStore} message BookStore message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BookStore.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.books != null && message.hasOwnProperty("books"))
                    for (var keys = Object.keys(message.books), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.books[keys[i]]).ldelim();
                return writer;
            };

            /**
             * Encodes the specified BookStore message, length delimited. Does not implicitly {@link com.book.BookStore.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.book.BookStore
             * @static
             * @param {com.book.IBookStore} message BookStore message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BookStore.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BookStore message from the specified reader or buffer.
             * @function decode
             * @memberof com.book.BookStore
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.book.BookStore} BookStore
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BookStore.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.book.BookStore(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        reader.skip().pos++;
                        if (message.books === $util.emptyObject)
                            message.books = {};
                        key = reader.int64();
                        reader.pos++;
                        message.books[typeof key === "object" ? $util.longToHash(key) : key] = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BookStore message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.book.BookStore
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.book.BookStore} BookStore
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BookStore.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BookStore message.
             * @function verify
             * @memberof com.book.BookStore
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BookStore.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.books != null && message.hasOwnProperty("books")) {
                    if (!$util.isObject(message.books))
                        return "books: object expected";
                    var key = Object.keys(message.books);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.key64Re.test(key[i]))
                            return "books: integer|Long key{k:int64} expected";
                        if (!$util.isString(message.books[key[i]]))
                            return "books: string{k:int64} expected";
                    }
                }
                return null;
            };

            /**
             * Creates a BookStore message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof com.book.BookStore
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {com.book.BookStore} BookStore
             */
            BookStore.fromObject = function fromObject(object) {
                if (object instanceof $root.com.book.BookStore)
                    return object;
                var message = new $root.com.book.BookStore();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.books) {
                    if (typeof object.books !== "object")
                        throw TypeError(".com.book.BookStore.books: object expected");
                    message.books = {};
                    for (var keys = Object.keys(object.books), i = 0; i < keys.length; ++i)
                        message.books[keys[i]] = String(object.books[keys[i]]);
                }
                return message;
            };

            /**
             * Creates a plain object from a BookStore message. Also converts values to other types if specified.
             * @function toObject
             * @memberof com.book.BookStore
             * @static
             * @param {com.book.BookStore} message BookStore
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BookStore.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.books = {};
                if (options.defaults)
                    object.name = "";
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                var keys2;
                if (message.books && (keys2 = Object.keys(message.books)).length) {
                    object.books = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.books[keys2[j]] = message.books[keys2[j]];
                }
                return object;
            };

            /**
             * Converts this BookStore to JSON.
             * @function toJSON
             * @memberof com.book.BookStore
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BookStore.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BookStore;
        })();

        /**
         * EnumSample enum.
         * @name com.book.EnumSample
         * @enum {string}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} STARTED=1 STARTED value
         * @property {number} RUNNING=1 RUNNING value
         */
        book.EnumSample = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "STARTED"] = 1;
            values["RUNNING"] = 1;
            return values;
        })();

        return book;
    })();

    return com;
})();

module.exports = $root;
