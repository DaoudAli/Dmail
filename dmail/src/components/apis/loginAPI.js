const login = async (data) => {
  var promise = new Promise((resolve, reject) => {
    var userFound = null;
    fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      response.json().then((data) => {
        if (data.userFound) {
          userFound = true;
          resolve(userFound);
        } else {
          userFound = false;
          resolve(userFound);
        }
      });
    });
  });

  return promise;
};

export default login;
