



const books = [
  {
    title: "Learning Python",
    author: "Mark Lutz",
    price: 899,
    image: "https://tse4.mm.bing.net/th/id/OIP.4frF7WqRRFZDPRxyx5dBPwHaFb?pid=Api&P=0&h=180"
  },
  {
    title: "Fluent Python",
    author: "Luciano Ramalho",
    price: 1299,
    image: "https://tse4.mm.bing.net/th/id/OIP.3Qk9EaW8O5XYywwff_uQQwHaJ4?pid=Api&P=0&h=180"
  },
  {
    title: "Django for Beginners",
    author: "William S. Vincent",
    price: 750,
    image: "https://tse1.mm.bing.net/th/id/OIP._MhTwKxxX19udpDbo6YriAHaJl?pid=Api&P=0&h=180"
  },
  {
    title: "Python Crash Course",
    author: "Eric Matthes",
    price: 999,
    image: "https://tse2.mm.bing.net/th/id/OIP.MgE5O9qXUOWVYbHM8xcDFgHaJH?pid=Api&P=0&h=180"
  }
];

const bookList = document.getElementById("bookList");

books.forEach(book => {
  const card = document.createElement("div");
  card.className = "book-card";

  card.innerHTML = `
    <img src="${book.image}" alt="${book.title}" />
    <h3>${book.title}</h3>
    <p><em>${book.author}</em></p>
    <p class="price">₹${book.price}</p>
    <button class="view-btn">View</button>
  `;

  card.querySelector(".view-btn").addEventListener("click", () => {
    alert(`📘 ${book.title}\n👤 Author: ${book.author}\n💰 Price: ₹${book.price}`);
  });

  bookList.appendChild(card);
});
