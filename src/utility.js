class Utility {
  static objToURLParam(obj) {
    var str = "";
    for (var key in obj) {
      if (str != "") {
        str += "&";
      }
      str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str;
  }

  /**
   * Javascript does time_stamp shallow copy when assignment is done with objects.
   * To make deep copy, use this function.
   *
   * @param {Object} obj The javascript to deep copy.
   * @return {Object} Deep copied 'obj'.
   */
  static deepCopy(obj) {
    return _.map(obj, _.clone);
  }
}

export default Utility;
