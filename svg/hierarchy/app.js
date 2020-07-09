const dataSource = 'https://s5.ssl.qhres.com/static/b0695e2dd30daa64.json';

/* globals d3 */
(async function () {
  const data = await (await fetch(dataSource)).json();
  const regions = d3.hierarchy(data)
    .sum(d => 1)
    .sort((a, b) => b.value - a.value);

  const pack = d3.pack()
    .size([1600, 1600])
    .padding(3);

  const root = pack(regions);

  const svgroot = document.querySelector('svg');

  function draw(parent, node, {fillStyle = 'rgba(0, 0, 0, 0.2)', textColor = 'white'} = {}) {
    const children = node.children;
    const {x, y, r} = node;
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', r);
    circle.setAttribute('fill', fillStyle);
    circle.setAttribute('data-name', node.data.name);
    parent.appendChild(circle);
    if(children) {
      const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      for(let i = 0; i < children.length; i++) {
        draw(group, children[i], {fillStyle, textColor});
      }
      group.setAttribute('data-name', node.data.name);
      parent.appendChild(group);
    } else {
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('fill', textColor);
      text.setAttribute('font-family', 'Arial');
      text.setAttribute('font-size', '1.5rem');
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('x', x);
      text.setAttribute('y', y);
      const name = node.data.name;
      text.textContent = name;
      parent.appendChild(text);
    }
  }

  draw(svgroot, root);

  const titleEl = document.getElementById('title');

  function getTitle(target) {
    const name = target.getAttribute('data-name');
    if(target.parentNode && target.parentNode.nodeName === 'g') {
      const parentName = target.parentNode.getAttribute('data-name');
      return `${parentName}-${name}`;
    }
    return name;
  }

  let activeTarget = null;
  svgroot.addEventListener('mousemove', (evt) => {
    let target = evt.target;
    if(target.nodeName === 'text') target = target.previousSibling;
    if(activeTarget !== target) {
      if(activeTarget) activeTarget.setAttribute('fill', 'rgba(0, 0, 0, 0.2)');
    }
    target.setAttribute('fill', 'rgba(0, 128, 0, 0.1)');
    titleEl.textContent = getTitle(target);
    activeTarget = target;
  });
}());