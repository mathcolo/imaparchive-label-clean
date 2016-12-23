# Overview
This is a Google Apps Script function to unlabel [Imap]/Archive Gmail messages.

# Motivation
The Spark email client for macOS (it's really nice!) has an Archive feature. But given a Gmail account, Spark's Archive action assigns the [Imap]/Archive label to a message, instead of removing all labels. This script configured as a trigger solves that.

# Usage

Mostly self-explanatory. Copy the function to scripts.google.com, and add a time-driven trigger.
