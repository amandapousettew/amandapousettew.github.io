const films=[...document.querySelectorAll('.film[data-youtube]')];
for(const film of films){
 const play=film.querySelector('.play');
 play.addEventListener('click',event=>{
  if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
  event.preventDefault();
  for(const other of films){other.querySelector('iframe')?.remove();other.classList.remove('is-playing')}
  const frame=document.createElement('iframe');
  frame.title=film.dataset.title;
  frame.src=`https://www.youtube.com/embed/${film.dataset.youtube}?autoplay=1&playsinline=1&rel=0&enablejsapi=1&origin=${encodeURIComponent(location.origin)}`;
  frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.allowFullscreen=true;
  frame.referrerPolicy='strict-origin-when-cross-origin';
  film.append(frame);film.classList.add('is-playing');
 });
}
