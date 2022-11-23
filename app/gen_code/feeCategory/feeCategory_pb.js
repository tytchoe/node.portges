var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.feeCategory.FeeCategories', null, global);
goog.exportSymbol('proto.feeCategory.FeeCategory', null, global);
goog.exportSymbol('proto.feeCategory.Empty', null, global);

proto.feeCategory.FeeCategory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feeCategory.FeeCategory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feeCategory.FeeCategory.displayName = 'proto.feeCategory.FeeCategory';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
proto.feeCategory.FeeCategory.prototype.toObject = function(opt_includeInstance) {
  return proto.feeCategory.FeeCategory.toObject(opt_includeInstance, this);
};
proto.feeCategory.FeeCategory.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    feename: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}
proto.feeCategory.FeeCategory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feeCategory.FeeCategory;
  return proto.feeCategory.FeeCategory.deserializeBinaryFromReader(msg, reader);
};
proto.feeCategory.FeeCategory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};
proto.feeCategory.FeeCategory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feeCategory.FeeCategory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
proto.feeCategory.FeeCategory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFeename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};

proto.feeCategory.FeeCategory.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

proto.feeCategory.FeeCategory.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

proto.feeCategory.FeeCategory.prototype.getFeename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

proto.feeCategory.FeeCategory.prototype.setFeename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


proto.feeCategory.FeeCategories = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.feeCategory.FeeCategories.repeatedFields_, null);
};
goog.inherits(proto.feeCategory.FeeCategories, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feeCategory.FeeCategories.displayName = 'proto.feeCategory.FeeCategories';
}

proto.feeCategory.FeeCategories.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
proto.feeCategory.FeeCategories.prototype.toObject = function(opt_includeInstance) {
  return proto.feeCategory.FeeCategories.toObject(opt_includeInstance, this);
};

proto.feeCategory.FeeCategories.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.feeCategory.FeeCategory.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}

proto.feeCategory.FeeCategories.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feeCategory.FeeCategories;
  return proto.feeCategory.FeeCategories.deserializeBinaryFromReader(msg, reader);
};

proto.feeCategory.FeeCategories.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.feeCategory.FeeCategory;
      reader.readMessage(value,proto.feeCategory.FeeCategory.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};

proto.feeCategory.FeeCategories.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feeCategory.FeeCategories.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.feeCategory.FeeCategories.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.feeCategory.FeeCategory.serializeBinaryToWriter
    );
  }
};

proto.feeCategory.FeeCategories.prototype.getResultList = function() {
  return /** @type{!Array<!proto.feeCategory.FeeCategory>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.feeCategory.FeeCategory, 1));
};

proto.feeCategory.FeeCategories.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

proto.feeCategory.FeeCategories.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.feeCategory.FeeCategory, opt_index);
};

proto.feeCategory.FeeCategories.prototype.clearResultList = function() {
  return this.setResultList([]);
};

proto.feeCategory.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.feeCategory.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.feeCategory.Empty.displayName = 'proto.feeCategory.Empty';
}



if (jspb.Message.GENERATE_TO_OBJECT) {

proto.feeCategory.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.feeCategory.Empty.toObject(opt_includeInstance, this);
};

proto.feeCategory.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}

proto.feeCategory.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.feeCategory.Empty;
  return proto.feeCategory.Empty.deserializeBinaryFromReader(msg, reader);
};

proto.feeCategory.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};

proto.feeCategory.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.feeCategory.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.feeCategory.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};

goog.object.extend(exports, proto.feeCategory);





