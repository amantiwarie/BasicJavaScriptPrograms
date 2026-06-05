
        $(document).ready(function () {

            // Add Task
            $("#addBtn").click(function () {

                let task = $("#taskInput").val().trim();

                if (task === "") {
                    alert("Please enter a task");
                    return;
                }

                let newTask = `
                    <li>
                        <span class="task-text">${task}</span>
                        <button class="delete-btn">Delete</button>
                    </li>
                `;

                $("#taskList").append(newTask);

                $("#taskInput").val("");
            });

            // Mark Complete
            $("#taskList").on("click", ".task-text", function () {
                $(this).toggleClass("completed");
            });

            // Delete Task
            $("#taskList").on("click", ".delete-btn", function () {
                $(this).parent().remove();
            });

        });
