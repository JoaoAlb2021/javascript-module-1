  const array = [
    100,
    "iSMael",
    55,
    45,
    "sANyiA",
    66,
    "JaMEs",
    "eLAmIn",
    23,
    "IsMael",
    67,
    19,
    "ElaMIN",
  ];

  function isAName(item){
      return typeof(item)=== 'string'
  }

  const noNumbers = array.filter(isAName).map((item) => item.toUpperCase())

  console.log(noNumbers);