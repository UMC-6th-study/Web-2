const taskInput = document.getElementById('taskInput'); // 입력 필드 요소 가져오기
    const todoList = document.getElementById('todoList'); // 해야할 일 목록 요소 가져오기
    const completedList = document.getElementById('completedList'); // 해낸 일 목록 요소 가져오기

    taskInput.addEventListener('keypress', function (e) { // 입력 필드에 이벤트 리스너 추가
        if (e.key === 'Enter' && taskInput.value.trim() !== '') { // 엔터 키를 눌렀고 입력값이 비어있지 않은 경우
            addTask(taskInput.value.trim()); // 입력값을 해야할 일 목록에 추가
            taskInput.value = ''; // 입력 필드 초기화
        }
    });

    function addTask(taskContent) { // 새로운 일을 목록에 추가하는 함수
        const li = document.createElement('li'); // 새로운 목록 아이템 생성
        li.innerText = taskContent; // 텍스트 설정
        const checkBox = document.createElement('button'); // 완료 버튼 요소 생성
        checkBox.innerText = '완료'; // 버튼 텍스트 설정
        checkBox.classList.add('success-btn'); // 버튼에 클래스 추가
        checkBox.addEventListener('click', completeTask); // 버튼에 클릭 이벤트 리스너 추가
        li.appendChild(checkBox); // 목록 아이템에 완료 버튼 추가
        todoList.appendChild(li); // 해야할 일 목록에 목록 아이템 추가
    }

    function completeTask() { // 작업 완료 처리 함수
        const task = this.parentElement; // 버튼의 부모 요소인 목록 아이템 가져오기
        todoList.removeChild(task); // 해야할 일 목록에서 목록 아이템 제거
        task.classList.add('completed'); // 목록 아이템에 completed 클래스 추가
        const deleteBtn = document.createElement('button'); // 삭제 버튼 요소 생성
        deleteBtn.innerText = '삭제'; // 버튼 텍스트 설정
        deleteBtn.classList.add('delete-btn'); // 버튼에 클래스 추가
        deleteBtn.addEventListener('click', deleteTask); // 버튼에 이벤트 리스너 추가
        task.appendChild(deleteBtn); // 목록 아이템에 삭제 버튼 추가
        completedList.appendChild(task); // 해낸 일 목록에 목록 아이템 추가
        this.style.display = 'none'; // 버튼 숨기기
    }

    function deleteTask() { // 작업 삭제 함수
        const task = this.parentElement; // 삭제할 목록 아이템 가져오기
        task.remove(); // 목록 아이템 제거
    }
