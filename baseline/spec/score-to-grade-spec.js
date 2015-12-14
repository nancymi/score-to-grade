describe ("score-to-grade : ",function(){

  it("put 91(90-100) can output S", function(){
      var result = getScoreLevel(91);
      expect(result).toBe("S");
  });

    it("put 86(80-89) can output A", function(){
      var result = getScoreLevel(86);
      expect(result).toBe("A");
  });

    it("put 77(70-79) can output B", function(){
      var result = getScoreLevel(77);
      expect(result).toBe("B");
  });

     it("put 77.7(小数) can output B", function(){
      var result = getScoreLevel(77.7);
      expect(result).toBe("B");
  });

      it("put 62(60-69) can output C", function(){
      var result = getScoreLevel(62);
      expect(result).toBe("C");
  });

      it("put 40(<60) can output D", function(){
      var result = getScoreLevel(40);
      expect(result).toBe("D");
  });

      it("put 负数 can output string", function(){      
      expect(function() {
        getScoreLevel(-62);
      }).toThrowError("input error!");
  });

      it("put 101(>100) can output string", function(){
      expect(function() {
        getScoreLevel(101);
      }).toThrowError(TypeError, "input error!");
  });

});
