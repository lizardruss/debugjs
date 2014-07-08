// Shim for Function.prototype.bind, since phantomjs is using an old version
// of webkit which lacks this functionality. Function.prototype.bind is required
// by stuff.js, which is used by the clientexecutor.js
wrapGenerator.mark(__top);

function __top() {
  return wrapGenerator(function __top$($ctx1) {
    while (1) switch ($ctx1.next) {
    case 0:
      $ctx1.next = 2;

      return {
        "type": "stackFrame",
        "filename": "bind.js",
        "name": "Global Scope",
        "scope": [],

        "evalInScope": function(expr) {
          return eval(expr);
        }
      }
    case 2:
      if (!Function.prototype.bind) {
        Function.prototype.bind = wrapGenerator.mark(function(oThis) {
          var aArgs, fToBind, fNOP, fBound, $args = arguments;

          return wrapGenerator(function($ctx2) {
            while (1) switch ($ctx2.next) {
            case 0:
              $ctx2.next = 2;

              return {
                "type": "stackFrame",
                "filename": "bind.js",
                "name": "anonymous function",

                "scope": [{
                  "name": "oThis",

                  "locs": [{
                    "start": {
                      "line": 5,
                      "column": 38
                    },

                    "end": {
                      "line": 5,
                      "column": 43
                    }
                  }]
                }, {
                  "name": "aArgs",

                  "locs": [{
                    "start": {
                      "line": 11,
                      "column": 8
                    },

                    "end": {
                      "line": 11,
                      "column": 13
                    }
                  }]
                }, {
                  "name": "fToBind",

                  "locs": [{
                    "start": {
                      "line": 12,
                      "column": 8
                    },

                    "end": {
                      "line": 12,
                      "column": 15
                    }
                  }]
                }, {
                  "name": "fNOP",

                  "locs": [{
                    "start": {
                      "line": 13,
                      "column": 8
                    },

                    "end": {
                      "line": 13,
                      "column": 12
                    }
                  }]
                }, {
                  "name": "fBound",

                  "locs": [{
                    "start": {
                      "line": 14,
                      "column": 8
                    },

                    "end": {
                      "line": 14,
                      "column": 14
                    }
                  }]
                }],

                "evalInScope": function(expr) {
                  return eval(expr);
                }
              }
            case 2:
              if (!(typeof this !== "function")) {
                $ctx2.next = 4;
                break;
              }

              throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            case 4:
              $ctx2.next = 6;

              return __thunk(wrapGenerator.mark(function thunk() {
                var $args = arguments;

                return wrapGenerator(function thunk$($ctx3) {
                  while (1) switch ($ctx3.next) {
                  case 0:
                    $ctx3.rval = Array.prototype.slice.call($args, 1);
                    delete $ctx3.thrown;
                    $ctx3.next = 4;
                    break;
                  case 4:
                  case "end":
                    return $ctx3.stop();
                  }
                }, this);
              }), this, $args);
            case 6:
              aArgs = $ctx2.sent;
              fToBind = this;

              fNOP = wrapGenerator.mark(function() {
                return wrapGenerator(function($ctx4) {
                  while (1) switch ($ctx4.next) {
                  case 0:
                    $ctx4.next = 2;

                    return {
                      "type": "stackFrame",
                      "filename": "bind.js",
                      "name": "anonymous function",
                      "scope": [],

                      "evalInScope": function(expr) {
                        return eval(expr);
                      }
                    }
                  case 2:
                  case "end":
                    return $ctx4.stop();
                  }
                }, this);
              });

              fBound = wrapGenerator.mark(function() {
                var $args = arguments;

                return wrapGenerator(function($ctx5) {
                  while (1) switch ($ctx5.next) {
                  case 0:
                    $ctx5.next = 2;

                    return {
                      "type": "stackFrame",
                      "filename": "bind.js",
                      "name": "anonymous function",
                      "scope": [],

                      "evalInScope": function(expr) {
                        return eval(expr);
                      }
                    }
                  case 2:
                    $ctx5.next = 4;

                    return __thunk(wrapGenerator.mark(function thunk() {
                      var $args = arguments;

                      return wrapGenerator(function thunk$($ctx6) {
                        while (1) switch ($ctx6.next) {
                        case 0:
                          $ctx6.t0 = this instanceof fNOP && oThis
                                                 ? this
                                                 : oThis;

                          $ctx6.next = 3;

                          return __thunk(wrapGenerator.mark(function thunk() {
                            var $args = arguments;

                            return wrapGenerator(function thunk$($ctx7) {
                              while (1) switch ($ctx7.next) {
                              case 0:
                                $ctx7.next = 2;

                                return __thunk(wrapGenerator.mark(function thunk() {
                                  var $args = arguments;

                                  return wrapGenerator(function thunk$($ctx8) {
                                    while (1) switch ($ctx8.next) {
                                    case 0:
                                      $ctx8.rval = Array.prototype.slice.call($args);
                                      delete $ctx8.thrown;
                                      $ctx8.next = 4;
                                      break;
                                    case 4:
                                    case "end":
                                      return $ctx8.stop();
                                    }
                                  }, this);
                                }), this, $args);
                              case 2:
                                $ctx7.t2 = $ctx7.sent;
                                $ctx7.rval = aArgs.concat($ctx7.t2);
                                delete $ctx7.thrown;
                                $ctx7.next = 7;
                                break;
                              case 7:
                              case "end":
                                return $ctx7.stop();
                              }
                            }, this);
                          }), this, $args);
                        case 3:
                          $ctx6.t1 = $ctx6.sent;
                          $ctx6.rval = fToBind.apply($ctx6.t0, $ctx6.t1);
                          delete $ctx6.thrown;
                          $ctx6.next = 8;
                          break;
                        case 8:
                        case "end":
                          return $ctx6.stop();
                        }
                      }, this);
                    }), this, $args);
                  case 4:
                    $ctx5.rval = $ctx5.sent;
                    delete $ctx5.thrown;
                    $ctx5.next = 8;
                    break;
                  case 8:
                  case "end":
                    return $ctx5.stop();
                  }
                }, this);
              });

              fNOP.prototype = this.prototype;
              fBound.prototype = __instantiate(fNOP);
              $ctx2.rval = fBound;
              delete $ctx2.thrown;
              $ctx2.next = 16;
              break;
            case 16:
            case "end":
              return $ctx2.stop();
            }
          }, this);
        });
      }
    case 3:
    case "end":
      return $ctx1.stop();
    }
  }, this);
}
