function calculatePrice() {

    let moviePrice = Number(document.getElementById("movie").value);
    let tickets = Number(document.getElementById("tickets").value);

    if (tickets <= 0) {
        alert("Please enter a valid number of tickets.");
        return;
    }

    let totalPrice = moviePrice * tickets;

    document.getElementById("price").innerHTML =
        "Total Price: ₹" + totalPrice;
}

function bookTicket() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let movie = document.getElementById("movie");
    let movieName = movie.options[movie.selectedIndex].text;
    let moviePrice = Number(movie.value);
    let tickets = Number(document.getElementById("tickets").value);

    if (name === "" || email === "") {
        alert("Please fill all the details.");
        return;
    }

    if (tickets <= 0) {
        alert("Please enter a valid number of tickets.");
        return;
    }

    let totalPrice = moviePrice * tickets;

    document.getElementById("result").innerHTML = `
        <h2>🎉 Booking Confirmed!</h2>
        <br>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Movie:</strong> ${movieName}</p>
        <p><strong>Tickets:</strong> ${tickets}</p>
        <p><strong>Total Amount:</strong> ₹${totalPrice}</p>
        <br>
        <h3>Thank You for Booking!</h3>
    `;
}