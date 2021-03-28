function getRandomChinese(length) {
        let i = 0;
        let chineseString = "";
        let promise = new Promise (
          function (resolve, reject){
            let chineseLetter=""
              setTimeout(function() { 
                let date = Date.now().toString().substring(8);
                chineseLetter += String.fromCharCode(date)
              },5000)
              resolve (chineseLetter)
              reject(new Error("Whoops!"))

          })
          while (i < length) {
            chineseString = chineseString + promise.then (result => result);
            console.log(promise.then (result => result))
            i++
          }
          console.log(chineseString)
      }
  
  getRandomChinese(5);