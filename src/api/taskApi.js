import axios from "./axiosClient"

const taskApi = {
    // Get user's all tasks
    getAllTasks: () => axios.get("/tasks/me"),
    
    // Create and add task DTO: {title: string}
    addTask: (taskCreateDTO) => axios.post("/tasks", taskCreateDTO),
    
    // Update task e.g. task title  
    // Suggestion: i think is better to not save IsCompleted of a task in db but local storage
    // DTO: {title?: string, isCompleted?: string}  "?" means it can be null
    // TaskId: int
    updateTask: (taskId, taskPatchDTO) => axios.patch(`/tasks/${taskId}`, taskPatchDTO),
    
    // Delete task
    deleteTask: (taskId) => axios.delete(`/tasks/${taskId}`)
};

export default taskApi;