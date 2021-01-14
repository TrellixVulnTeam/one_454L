let projectLink = $('.projects__inner__box__text').find('a');
let projectModalBackground = $(".projects__modal__background");
let body = $('.core');
let modalClose = $('.projects__modal').find('i');

$(projectLink).on('click', function() {
    let projectId = $(this).prop('id');
    let projectModal = $('.projects__modal').attr('id', projectId);

    $(projectModalBackground).fadeIn(500);
    $(projectModal).fadeIn(500);
    $(body).addClass('no-scroll');
});

$(projectModalBackground).on('click', function() {
    close();
});

$(modalClose).on('click', function() {
  close();
})

function close() {
    let currentProjectModal = $('.projects__modal').css('display', 'block');

    $(currentProjectModal).fadeOut(300);
    $(projectModalBackground).fadeOut(300);
    $(body).removeClass('no-scroll');
};