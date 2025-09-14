<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps<{
  src?: string
}>()

let flag = true
function onload() {
  console.log(11111111111)
  const iframe = document.getElementById('gitIframe');
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  iframeDoc.addEventListener('click', function() {
    console.log('Iframe hash changed');
    flag = true
    onload()
  });
  const partialheader = iframeDoc.getElementById("partial-discussion-header")
  if (!partialheader) {
    if (!flag) return
    setTimeout(() => {
      flag = false
      onload()
    }, 10000);
  } else {
    partialheader.style.display = 'none'
    const headerwrapper = iframeDoc.getElementsByClassName('header-wrapper')
    if (headerwrapper && headerwrapper[0]) {
      headerwrapper[0].style.display = 'none'
    }
    const stickyheader = iframeDoc.getElementById("sticky-header-backdrop")
    if (stickyheader) {
      stickyheader.style.display = 'none'
    }
    const footer = iframeDoc.getElementsByTagName('footer')
    if (footer && footer[0]) {
      footer[0].style.display = 'none'
    }
    const sidebar = iframeDoc.getElementsByClassName('Layout-sidebar')
    if (sidebar && sidebar[0]) {
      sidebar[0].style.display = 'none'
    }
    const timeline = iframeDoc.getElementsByClassName('discussion-timeline-actions')
    if (timeline && timeline[0]) {
      timeline[0].style.display = 'none'
    }
  }
}

let httpSrc = ref(props.src)
onMounted(() => {
  httpSrc.value = window.location.origin + props.src 
})
</script>

<template>
  <div class="github-view">
    <iframe :src="httpSrc" sandbox="allow-scripts allow-same-origin" @change="onload" @load="onload" frameborder="0" id="gitIframe"></iframe>
  </div>
</template>

<style>
.github-view {
  iframe {
    width: 100%;
    height: 500px;
  }
}
.partial-discussion-header {
  top: -300px;
}
</style>