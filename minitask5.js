function queue(name, time) {
  return new Promise((resolve, reject) => {
    if (time < 0) {
      reject("gagal");
    } else {
      setTimeout(() => {
        resolve(name);
      }, time);
    }
  });
}

// Then - Chatch

queue("Jhon", 1500)
  .then(function (Callback) {
    console.log(Callback);
    queue("Ed", 2000)
      .then(function (Callback) {
        console.log(Callback);
        queue("Jane", 500)
          .then(function (Callback) {
            console.log(Callback);
          })
          .catch(function () {
            console.log(Callback);
          });
      })
      .catch(function () {
        console.log(Callback);
      });
  })
  .catch(function () {
    console.log(Callback);
  });

// async- await

async function main() {
  try {
    await queue("Jhon", 1500).then(function (Callback) {
      console.log(Callback);
      queue("Ed", 2000).then(function (Callback) {
        console.log(Callback);
        queue("Jane", 500).then(function (Callback) {
          console.log(Callback);
        });
      });
    });
  } catch (err) {
    console.log(err);
  }
}
main();

queue("Jhon", 1500)
  .then((result) => {
    console.log(result); // "Jhon"
    return queue("Ed", 2000);
  })
  .then((result) => {
    console.log(result); // "Ed"
    return queue("Jane", 500);
  })
  .then((result) => {
    console.log(result); // "Jane"
  })
  .catch((err) => {
    console.error("Terjadi kesalahan:", err);
  });
