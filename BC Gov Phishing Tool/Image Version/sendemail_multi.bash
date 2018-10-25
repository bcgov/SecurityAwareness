#!/bin/bash
 
#Email formats need to start at email_content0.html and increment gradually

# Count the number of email formats
email_num=0
for f in ~/Phishing/email_content*.html
do
	email_num=$((${email_num}+1))
	echo ${email_num}
done

# Create an array for the email addresses
declare -a address_list

# Allow for an email list file parameter as an optional argument
echo "$1"
#if [$# -ne 0]; then
#	FILE="$1"
#else 
FILE=~/Phishing/emailaddr.txt
#fi

# Load file into array.
readarray address_list<"$FILE"

# Shuffle the email list
address_list=( $(shuf -e "${address_list[@]}") )

# Set initial indexes
i=0
j=0

function string_replace {
    echo "${1/\*/$2}"
}


for address in "${address_list[@]}"
do

	# Use modulo to cycle through the email formats.
	j=$((${i}%${email_num}))

	# encode any image in base64
	image64=$( base64  ~/Phishing/image${j}.png )	

	# insert the image into the email, if there is a place for it
	email_content="$(cat ~/Phishing/email_content${j}.html)"
	email_content="$(string_replace "$email_content" "$image64")"

	# Send the email
	/usr/sbin/sendmail -f "layth.holubeshen@gov.bc.ca" "${address}" <<< "$email_content"
	echo ${address}	

	# Increment our count
	i=$((i+1))

	# Set a delay between each email.
	# .6 seconds corresponds to at most 100 emails per minute. That is the maximum that we are allowed to send at a time.
	sleep .6s
done

