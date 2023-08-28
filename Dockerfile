FROM python:3.9-slim

ADD . IntertechDOB 
WORKDIR /IntertechDOB

RUN pip install --upgrade pip
RUN pip install -r requirements.txt
#RUN apt-get update && apt-get install -y ffmpeg libsm6 libxext6 
RUN apt-get update -y
RUN apt-get install -y libgl1 libglib2.0-0 libsm6 libxrender1 libxext6
RUN apt-get install -y zbar-tools

EXPOSE 5000

CMD ["python", "api.py"]