# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse
from django.template.loader import render_to_string
from portfolio.models import Project


def index(request):
	projects = Project.objects.all()
	return render(request, 'index.html', {'projects': projects})

def works(request, work=None):
	works = Project.objects.all()
	if work:
		work = Project.objects.get(slug=work)
		print(work)
		return render(request, 'works.html',{'works': works, 'work':work})
	return render(request, 'works.html',{'works': works})

def works_detail(request, slug):
	work = Project.objects.get(slug=slug)
	html = render_to_string('works-detail.html', {'work': work})
	return HttpResponse(html)

