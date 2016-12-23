function clearImapArchive() {
  
  var threads = GmailApp.search('label:[imap]-archive');
  var archiveLabel = GmailApp.getUserLabelByName('[Imap]/Archive');

  for(var i = 0; i < threads.length; i++) {
    threads[i].removeLabel(archiveLabel);
  }
  
}
