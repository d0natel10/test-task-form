const departments = {
  city1: ['Основной цех', 'Вспомогательный цех', 'Обслуживающий цех', 'Побочный цех'],
  city2: ['Основной цех', 'Заготовительный цех', 'Сборочный цех']
  };
  
  const employees = {
    'Основной цех': ['Сотрудник 12', 'Сотрудник 256', 'Сотрудник 33', 'Сотрудник 11', 'Сотрудник 312'],
    'Вспомогательный цех': ['Сотрудник 48', 'Сотрудник 50', 'Сотрудник 60'],
    'Обслуживающий цех': ['Сотрудник 70', 'Сотрудник 98', 'Сотрудник 8', 'Сотрудник 39'],
    'Побочный цех': ['Сотрудник 9', 'Сотрудник 10', 'Сотрудник 111'],
    'Основной цех': ['Сотрудник Alpha', 'Сотрудник Beta', 'Сотрудник Gamma', 'Сотрудник Delta'],
    'Заготовительный цех': ['Сотрудник John', 'Сотрудник Jane', 'Сотрудник Doe', 'Сотрудник Alfred', 'Сотрудник Tess'],
    'Сборочный цех': ['Сотрудник Mike', 'Сотрудник Sarah', 'Сотрудник Emily']
  };
  
  const citySelect = document.getElementById('city');
  const departmentSelect = document.getElementById('department');
  const employeeSelect = document.getElementById('employee');
  const teamSelect = document.getElementById('team');
  const shiftSelect = document.getElementById('shift');
  
  citySelect.addEventListener('change', function() {
    const selectedCity = citySelect.value;
    const selectedDepartments = departments[selectedCity] || [];
    
    departmentSelect.innerHTML = '<option value="">Выберите цех</option>';
    selectedDepartments.forEach(function(dept) {
      const option = document.createElement('option');
      option.text = dept;
      option.value = dept;
      departmentSelect.add(option);
    });
  
    employeeSelect.innerHTML = '<option value="">Выберите сотрудника</option>';
  });
  
  departmentSelect.addEventListener('change', function() {
    const selectedDepartment = departmentSelect.value;
    const selectedEmployees = employees[selectedDepartment] || [];
  
    employeeSelect.innerHTML = '<option value="">Выберите сотрудника</option>';
    selectedEmployees.forEach(function(emp) {
      const option = document.createElement('option');
      option.text = emp;
      option.value = emp;
      employeeSelect.add(option);
    });
  });
  
  const testForm = document.getElementById('test-form');
  
  testForm.addEventListener('submit', function(e) {
    e.preventDefault();
  
    const formData = {
      city: citySelect.value,
      department: departmentSelect.value,
      employee: employeeSelect.value,
      team: teamSelect.value,
      shift: shiftSelect.value
    };
  
    const formDataJSON = JSON.stringify(formData);
  
    document.cookie = `test_task_form_data=${formDataJSON}`;
  
    alert('Выбранные значения сохранены в cookie!');
  });