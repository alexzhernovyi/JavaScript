var p = [1,23,-5,11];

Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};


alert("Max value is: "+p.max()+"\nMin value is: "+ p.min());