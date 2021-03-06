// 
// language::en
// 
module.exports = {
  toastr: {
    info: 'Info',
    error: 'Error',
    warning: 'Warning',
    success: 'Success'
  },
  menubar: {
    main: {
      title: 'AntSword',
      about: 'About',
      plugin: 'Plugin center',
      settings: 'System setting',
      language: 'Language setting',
      update: 'Check update',
      quit: 'Quit'
    },
    shell: {
      title: 'Data',
      add: 'Add data',
      search: 'Search data',
      dump: 'Dump data',
      import: 'Import data',
      clear: 'Clear all data'
    },
    edit: {
      title: 'Edit',
      undo: 'Undo',
      redo: 'Redo',
      cut: 'Cut',
      copy: 'Copy',
      paste: 'Paste',
      selectall: 'SelectAll'
    },
    window: {
      title: 'Window',
      next: 'Next window',
      prev: 'Prev window',
      close: 'Close window'
    }
  },
  shellmanager: {
    title: 'ShellManager',
    contextmenu: {
      terminal: 'Terminal',
      filemanager: 'FileManager',
      database: 'Database',
      add: 'Add',
      edit: 'Edit',
      delete: 'Delete',
      move: 'Move',
      search: 'Search',
      plugin: 'Plugins',
      pluginCenter: 'Plugin center',
      clearCache: 'Clear cache',
      clearAllCache: 'Clear all cache'
    },
    category: {
      title: 'Category',
      default: 'Default',
      toolbar: {
        add: 'Add',
        del: 'Del'
      },
      add: {
        title: 'Add category'
      },
      del: {
        title: 'Delete category',
        confirm: 'Are you sure to delete this category?',
        success: (category) => `Delete category(${category}) success!`,
        error: (category, err) => `Delete category(${category}failed!<br/>${err}`
      }
    },
    list: {
      title: 'Shell Lists',
      grid: {
        url: 'URL',
        ip: 'IP',
        addr: 'ADDR',
        ctime: 'CTIME',
        utime: 'UTIME'
      },
      add: {
        title: 'Add shell',
        toolbar: {
          add: 'Add',
          clear: 'Clear'
        },
        form: {
          url: 'Shell url',
          pwd: 'Shell pwd',
          encode: 'Encode',
          type: 'Shell type',
          encoder: 'Encoder'
        },
        warning: 'Please enter the full!',
        success: 'Add shell success!',
        error: (err) => `Add shell failed!<br/>${err}`
      },
      edit: {
        title: (url) => `Edit shell(${url})`,
        toolbar: {
          save: 'Save',
          clear: 'Clear'
        },
        form: {
          url: 'Shell url',
          pwd: 'Shell pwd',
          encode: 'Encode',
          type: 'Shell type',
          encoder: 'Encoder'
        },
        warning: 'Please enter the full!',
        success: 'Update shell success!',
        error: (err) => `Update shell failed!<br/>${err}`
      },
      del: {
        title: 'Delete shell',
        confirm: (len) => `Are you sure to delete ${len} shells?`,
        success: (len) => `Delete ${len} shells success!`,
        error: (err) => `Delete failed!<br/>${err}`
      },
      move: {
        success: (num) => `Move ${num}datas success!`,
        error: (err) => `Move data failed!<br/>${err}`
      },
      clearCache: {
        title: 'Clear cache',
        confirm: 'Are you sure to clear this cache?',
        success: 'Clear cache success!',
        error: (err) => `Clear cache failed!<br/>${err}`
      },
      clearAllCache: {
        title: 'Clear all cache',
        confirm: 'Are you sure to clear all the cache?',
        success: 'Clear all cache success!',
        error: (err) => `Clear all cache failed!<br/>${err}`
      }
    }
  },
  terminal: {
    title: 'Terminal',
    banner: {
      title: 'Infomations',
      drive: 'Drive   List',
      system: 'System  Info',
      user: 'Current User',
      path: 'Current Path'
    }
  },
  filemanager: {
    title: 'FileManager',
    delete: {
      title: 'Delete',
      confirm: (num) => `Are you sure to delete ${typeof(num) === 'number' ? num + ' files' : num} ?`,
      success: (path) => `Delete file [${path}] success!`,
      error: (path, err) => `Delete file [${path}] failed!${err ? '<br/>' + err : ''}`
    },
    paste: {
      success: (path) => `Paste file success!<br/>${path}`,
      error: (path, err) => `Paste file [${path}] failed!${err ? '<br/>' + err : ''}`
    },
    rename: {
      title: 'Rename',
      success: 'Rename success!',
      error: (err) => `Rename failed!${err ? '<br/>' + err : ''}`
    },
    createFolder: {
      title: 'Create Folder',
      value: 'New Folder',
      success: (path) => `Create folder success!<br/>${path}`,
      error: (path, err) => `Create folder [${path}] failed!${err ? '<br/>' + err : ''}`
    },
    createFile: {
      title: 'Create File',
      value: 'New File.txt',
      success: (path) => `Create file success!<br/>${path}`,
      error: (path, err) => `Create file [${path}] failed!${err ? '<br/>' + err : ''}`
    },
    retime: {
      title: 'Retime File',
      success: (path) => `Retime file success!<br/>${path}`,
      error: (path, err) => `Retime file [${path}] failed!${err ? '<br/>' + err : ''}`
    },
    wget: {
      title: 'Wget File',
      check: 'URL is not correct!',
      task: {
        name: 'WGET',
        start: 'Start to wget file..',
        success: 'Wget success!',
        failed: (ret) => `Failed:${ret}`,
        error: (err) => `Error:${err}`
      }
    },
    upload: {
      task: {
        name: 'Upload',
        failed: (err) => `Failed:${err}`,
        error: (err) => `Error:${err}`
      },
      success: (path) => `Upload file success!<br/>${path}`,
      error: (path, err) => `Upload file [${path}] failed!${err}`,
    },
    folder: {
      title: 'Folders'
    },
    files: {
      title: 'Files',
      bookmark: {
        add: 'Add bookmark',
        del: 'Remove this bookmark',
        clear: 'Clear all bookmarks'
      },
      toolbar: {
        new: 'New',
        folder: 'Folder',
        file: 'File',
        wget: 'Wget File',
        upload: 'Upload File',
        up: 'UP',
        refresh: 'Refresh',
        home: 'Home',
        bookmark: 'Bookmark',
        read: 'Read'
      },
      prompt: {
        add: {
          title: 'Add to bookmark',
          success: (path) => `Add to bookmark success!<br/>${path}`,
        },
        remove: {
          title: 'Remove bookmark',
          confirm: 'Remove this bookmark ?',
          success: 'Remove bookmark success!'
        },
        clear: {
          title: 'Clear all bookmarks',
          confirm: 'Clear all bookmarks ?',
          success: 'Clear all bookmark success!'
        }
      },
      grid: {
        header: {
          name: 'Name',
          time: 'Time',
          size: 'Size',
          attr: 'Attr'
        },
        contextmenu: {
          paste: {
            title: 'Paste',
            all: 'All items',
            clear: {
              title: 'Clear items',
              info: 'Clear all Clipboard.'
            }
          },
          preview: 'Preview',
          edit: 'Edit',
          delete: 'Delete',
          rename: 'Rename',
          refresh: 'Refresh',
          wget: 'WGET',
          upload: 'Upload',
          download: 'Download',
          modify: 'Modify the file time',
          copy: {
            title: 'Copy',
            warning: (id) => `Already add to clipboard!<br/>${id}`,
            info: (id) => `Add file to the clipboard.<br/>${id}`
          },
          create: {
            title: 'Create',
            folder: 'Folder',
            file: 'File'
          }
        }
      }
    },
    editor: {
      title: (path) => `Edit: ${path}`,
      toolbar: {
        save: 'Save',
        mode: 'Mode',
        encode: 'Encode'
      },
      loadErr: (err) => `Load file error!<br/>${err}`,
      success: (path) => `Save the file success!<br/>${path}`,
      error: (path, err) => `Save the file [${path}] failed!${err}`
    },
    tasks: {
      title: 'Tasks',
      grid: {
        header: {
          name: 'Name',
          desc: 'Description',
          status: 'Status',
          stime: 'StartTime',
          etime: 'EndTime'
        }
      }
    },
    download: {
      title: 'Download File',
      task: {
        name: 'Download',
        wait: 'Wait to download',
        cancel: 'Cancel download',
        start: 'Start to download',
        success: 'Download success!',
        error: (err) => `Error:${err}`
      },
      error: (name, err) => `Download file [${name}]error!<br/>${err}`,
      success: (name) => `Download file [${name}] success!`
    }
  },
  database: {
    list: {
      title: 'Config list',
      add: 'Add',
      del: 'Del',
      menu: {
        add: 'Add conf',
        del: 'Del conf'
      }
    },
    query: {
      title: 'Exec SQL',
      exec: 'Run',
      clear: 'Clear'
    },
    result: {
      title: 'Result',
      warning: 'Execution is completed, but no results return!',
      error: {
        database: (err) => `Failed to obtain a list of databases!<br/>${err}`,
        table: (err) => `Get table data failed!<br/>${err}`,
        column: (err) => `Failed to obtain field list!<br/>${err}`,
        query: (err) => `Failure to execute SQL!<br/>${err}`,
        parse: 'Return data format is incorrect!',
        noresult: 'No query results!'
      }
    },
    form: {
      title: 'Add conf',
      toolbar: {
        add: 'Add',
        clear: 'Clear'
      },
      type: 'Database type',
      encode: 'Database encode',
      host: 'Host',
      user: 'User',
      passwd: 'Password',
      warning: 'Please fill in the complete!',
      success: 'Successful add configuration!',
      del: {
        title: 'Delete configuration',
        confirm: 'Determine delete this configuration?',
        success: 'Delete configuration success!',
        error: (err) => `Delete configuration failed!<br/>${err}`
      }
    }
  },
  settings: {
    about: {
      title: 'About'
    },
    language: {
      title: 'Language setting',
      toolbar: {
        save: 'Save'
      },
      form: {
        label: 'Select language',
        zh: '简体中文',
        en: 'English'
      },
      success: 'Setting language success!',
      confirm: {
        content: 'Restart the application?',
        title: 'Setting language'
      }
    },
    update: {
      title: 'Check update',
      toolbar: {
        check: 'Check'
      }
    }
  },
  plugin: {
    error: (err) => `Load plugin center failed!<br/>${err}`
  }
}