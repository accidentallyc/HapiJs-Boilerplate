sleep 1
grunt concat
running_tasks=$(ps | grep grunt | awk '{print $1}')
if [ "${#running_tasks}" != "0" ]; then
  kill -9 $(ps | grep grunt | awk '{print $1}')
fi
grunt watch &
nodemon &
