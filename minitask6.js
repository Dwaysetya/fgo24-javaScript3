const url = "https://jsonplaceholder.typicode.com/users";

function fetchEmail(email) {
  return new Promise((resolve, reject) => {
    if (email === "0") {
      reject("gagal");
    } else {
      setTimeout(() => {
        resolve(email);
      }, email);
    }
  });
}

async function main() {
  try {
    await fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let hasil = [];
        for (let i = 0; i < data.length; i++) {
          let result = data[i].email;
          hasil = [`${result.toLowerCase()}`];
          console.log(hasil);
        }
      });
  } catch (err) {
    console.log("data tidak ditemukan");
  }
}
main();
