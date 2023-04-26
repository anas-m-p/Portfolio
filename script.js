const scrollingElement = (document.scrollingElement || document.body);

const scrollToBottom = () => {
   scrollingElement.scrollTop = scrollingElement.scrollHeight;
}

const scrollToTop = () => {
   scrollingElement.scrollTop = 0;
}

