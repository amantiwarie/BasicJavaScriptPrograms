
        $(document).ready(function () {
        $("#taskInput").keypress(function(event) {
            if (event.which === 13) {
                $("#addBtn").click();
            }
        });

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
                updateTaskCount();
            });

            // Mark Complete
            $("#taskList").on("click", ".task-text", function () {
                $(this).toggleClass("completed");
            });

            // Delete Task
            $("#taskList").on("click", ".delete-btn", function () {
                $(this).parent().remove();
                updateTaskCount();
            });

            function updateTaskCount() {
                $("#taskCount").text($("#taskList li").length);
            }


        });
