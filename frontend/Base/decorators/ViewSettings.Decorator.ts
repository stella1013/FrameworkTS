function ViewSettings(templateUrl : string, container : string) {
    return function(target : any) {
      // save a reference to the original constructor
      var original = target;
  
      // a utility function to generate instances of a class
      function construct(constructor, args) {
        var c : any = function () {
          return constructor.apply(this, args);
        }
        c.prototype = constructor.prototype;
        var instance =  new c();
        instance._container = container;
        instance._templateUrl = templateUrl;
        return instance;
      }
  
      // the new constructor behaviour
      var f : any = function (...args) {
        return construct(original, args);
      }
  
      // copy prototype so instanceof operator still works
      f.prototype = original.prototype;
  
      // return new constructor (will override original)
      return f;
    }
  }