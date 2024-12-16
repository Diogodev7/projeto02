$(document).ready(function() {
    // Função para adicionar tarefa
    $('#task-form').on('submit', function(e) {
        e.preventDefault();

        // Pega o valor da tarefa digitada
        const task = $('#task-input').val();

        // Adiciona a tarefa na lista
        $('#task-list').append('<li>' + task + '</li>');

        // Limpa o campo de input
        $('#task-input').val('');
    });

    // Função para riscar a tarefa quando clicada
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
