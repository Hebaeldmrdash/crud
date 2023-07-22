  var array = []
  if (localStorage.getitem('site ') != null) {
      array = JSON.parse(localStorage.getitem('site '))
      console.log(array);
      var cartona = ``
      for (var i = 0; i < array.length; i++) {
          cartona += ` 
        <tr >
        <td > ${array[i].Index}</td>
        <td > ${array[i].WebsiteName}</td>
        <td > ${array[i].Visit}</td>
        <td > ${array[i].Delete}</td>
        </tr>
      `
      }

      document.getElementById('demo').innerHTML = cartona
  }


  function website() {
      var name = document.getElementById('bookname').value
      var link = document.getElementById('link').value

      var object = {
          Index: 'index',
          WebsiteName: 'website name',
          Visit: 'visit',
          Delete: 'delet',
      }
      array.unshift(object)
      localStorage.setItem('site', JSON.stringify(array))
      console.log(array)

      var cartona = ``
      for (var i = 0; i < array.length; i++) {
          cartona += ` 
        <tr >
        <td > ${array[i].Index}</td>
        <td > ${array[i].WebsiteName}</td>
        <td > ${array[i].Visit}</td>
        <td > ${array[i].Delete}</td>
        </tr>
      `
      }

      document.getElementById('demo').innerHTML = cartona
  }

  function validateURL(check) {
      var validate =
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

      if (validate.test(check) == true) {
          return true;
      } else {
          return false;
      }
  }