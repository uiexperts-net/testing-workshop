// Edit button functionality
function editRow(button) {
    const row = button.parentNode.parentNode;
    const userId = row.cells[0].innerText;
    alert(`Edit user with ID: ${userId}`);
  }
  
  // Delete button functionality
  function deleteRow(button) {
    const row = button.parentNode.parentNode;
    const userId = row.cells[0].innerText;
    if (confirm(`Are you sure you want to delete user with ID: ${userId}?`)) {
      row.remove();
    }
  }
  
  // Add user functionality
  function addUser() {
    alert('Add user functionality goes here!');
  }
  