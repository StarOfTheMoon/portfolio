# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse
from portfolio.models import Project


def index(request):
	projects = Project.objects.all()
	return render(request, 'index.html', {'projects': projects})

def works(request, work=None):
	works = Project.objects.all()
	if work:
		selected = Project.objects.get(slug=work)
		print(selected)
		return render(request, 'works.html',{'works': works, 'selected':selected})
	return render(request, 'works.html',{'works': works})
