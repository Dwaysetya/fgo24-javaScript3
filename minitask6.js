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

const retrieveData = async () => {
  try {
    const fetchData = await fetch(url);
    const data = await fetchData.json();
    const emailOfUsers = data.map((item) => item.email.toLowerCase());
    console.log(emailOfUsers);
  } catch (err) {
    console.log(err);
  }
};

retrieveData();

// manual
async function main() {
  try {
    const res = await fetch(url);
    const data = await res.json();

    const kapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const kecil = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < data.length; i++) {
      let email = data[i].email;
      let hasil = "";

      for (let j = 0; j < email.length; j++) {
        let huruf = email[j];
        let indexKapital = kapital.indexOf(huruf);

        if (indexKapital !== -1) {
          hasil += kecil[indexKapital];
        } else {
          hasil += huruf;
        }
      }

      console.log(hasil);
    }
  } catch (err) {
    console.log("data tidak ditemukan");
  }
}

main();
