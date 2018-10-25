#!/bin/bash
 
#Email formats need to start at email_content1.html and increment gradually

# Count the number of email formats
email_num=0
for f in email_content*.html
do
	email_num=$((${email_num}+1))
done

# Create an array for the email addresses
declare -a address_list

# Allow for an email list file parameter as an optional argument
if [$# -ne 0]; then
	FILE="$1"
else 
	FILE=emailaddr.txt
fi

# Load file into array.
readarray address_list<"$FILE"

# Shuffle the email list
address_list=( $(shuf -e "${address_list[@]}") )

# Set initial indexes
i=0
j=0

for address in "${address_list[@]}"
do
	# Use modulo to cycle through the email formats.
	j=$((${i}%${email_num}))

	# Test Statements
	echo /home/isb/Desktop/emailcontent${j}.html
	echo ${address}
	
	# Send the email
	sendmail -f "replace_me@domain.ca" "${address}" < ~/Desktop/Phishing/email_content${j}.html
	
	# Increment our count
	i=$((i+1))

	# Set a delay between each email.
	# .6 seconds corresponds to at most 100 emails per minute. That is the maximum that we are allowed to send at a time.
	sleep .6s
done

