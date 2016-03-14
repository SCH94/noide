var config = require('../../config/client')

var editor = window.ace.edit('editor')

// enable autocompletion and snippets
editor.setOptions({
  enableSnippets: true,
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: false
})

editor.commands.addCommands([{
  name: 'help',
  bindKey: {
    win: 'Ctrl-H',
    mac: 'Command-H'
  },
  exec: function () {
    // $modal.open({
    //   templateUrl: '/client/fs/views/keyboard-shortcuts.html',
    //   size: 'lg'
    // })
  },
  readOnly: false // this command should apply in readOnly mode
}])

editor.setTheme('ace/theme/' + config.ace.theme)

module.exports = editor
