# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse
from django.template.loader import render_to_string
from django.core.mail import EmailMessage
from django.conf import settings
from portfolio.models import Project, Tag
from portfolio.forms import SettingsForm

def index(request):
	projects_all = Project.objects.all()
	projects = [{'image': p.image.filter(type="H")[0], 'slug': p.slug} for p in projects_all]
	return render(request, 'index.html', {'projects': projects})

def about(request):
	tags = Tag.objects.all()
	front = [front for front in tags if front.type == 'Front']
	back = [back for back in tags if back.type == 'Back']
	tagsFiltered = [{'cat': 'Front', 'tags': front}, {'cat': 'Back', 'tags' : back}]
	return render(request, 'about.html', {'tags': tagsFiltered})

def works(request, work=None):
	works = Project.objects.all()
	if work:
		work = Project.objects.get(slug=work)
		print(work)
		return render(request, 'works.html',{'works': works, 'work':work})
	return render(request, 'works.html',{'works': works})

def contact(request):
	form = SettingsForm()
	return render(request, 'contact.html', {'form': form})

def contact_ajax(request):
	if request.method == 'POST':
		form = SettingsForm(request.POST)
		if form.is_valid():
			name = form.cleaned_data['name']
			message = form.cleaned_data['message']
			email = form.cleaned_data['email']
			subject = "[Contact Form] Demande de " + name
			# create the email
			email_msg = EmailMessage()
			email_msg.subject = subject
			email_msg.body = message
			email_msg.from_email = email
			email_msg.to = [settings.EMAIL_HOST_USER]
			email_msg.reply_to = [email]
			# send it
			email_msg.send()
	else:
		form = SettingsForm(request.POST)
	html = render_to_string('form.html', {'form': form})
	return HttpResponse(html)