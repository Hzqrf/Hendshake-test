const todoList = document.getElementById('todoList');
        const totalCount = document.getElementById('totalCount');

        // Function to update the total count of items
        function updateTodoCount() {
            const count = todoList.children.length;
            totalCount.textContent = `(Total: ${count})`;
        }

        document.getElementById('activityForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            const activity = document.getElementById('activity').value;
            const price = document.getElementById('price').value;
            const type = document.getElementById('type').value;
            const bookingRequired = document.getElementById('bookingRequired').checked ? "Yes" : "No";
            const accessibility = document.getElementById('accessibility').value;

            const newTodoItem = document.createElement('li');

            // Create a span for the item text
            const itemText = document.createElement('span');
            itemText.textContent = `${activity} - $${price} | Type: ${type} | Booking Required: ${bookingRequired} | Accessibility: ${accessibility}`;
            
            // Create a delete button
            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-btn';
            deleteButton.innerText = 'Delete';
            
            // Add click event to the delete button
            deleteButton.addEventListener('click', function() {
                todoList.removeChild(newTodoItem);
                updateTodoCount(); // Update count after deletion
            });

            // Append the text and button to the list item
            newTodoItem.appendChild(itemText);
            newTodoItem.appendChild(deleteButton);

            todoList.appendChild(newTodoItem);
            updateTodoCount(); // Update count after addition

            // Optionally, reset the form
            document.getElementById('activityForm').reset();
        });