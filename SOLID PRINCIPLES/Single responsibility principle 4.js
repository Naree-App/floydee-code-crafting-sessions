// Function to create a user
function createUser(name, email) {
  return {
    name: name,
    email: email,
  };
}

// Function to save user data to the database
function saveUserToDatabase(user) {
  // Code to save user data to the database
  console.log(`Saving ${user.name} to the database...`);
}

function sendWelcomeEmail(email) {
  console.log(`Sending welcome email to ${email}...`);
}

const newUser = createUser("John", "john@example.com");

saveUserToDatabase(newUser);

sendWelcomeEmail(newUser.email);
